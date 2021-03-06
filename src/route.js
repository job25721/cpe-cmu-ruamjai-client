import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import App from "./pages/App.jsx";
import Index from "./pages/Index";
import MyRequests from "./pages/MyRequests";
import Requests from "./pages/Requests";
import Login from "./pages/Login";
import RequestById from "./pages/RequestDetail";
import Form from "./pages/Form";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";

import Protect from "./middleware/auth";
export const links = {
  index: "/",
  login: "/login",
  allPetition: "/petitions",
  myPetitions: "/mine",
  addPetition: "/petition/add",
  auth: "/login/auth",
  admin: "/admin",
  petitionDetail: (id) => `/petitions/${id}`,
};

export default () => {
  store.subscribe(() => {
    // console.log(store.getState());
  });
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Protect path="/app" component={App} exact={true} />

          <Route path={links.index} component={Index} exact={true} />
          <Route path={links.allPetition} component={Requests} exact={true} />
          <Route
            path={links.petitionDetail(":petitionId")}
            component={RequestById}
          />

          <Protect
            path={links.myPetitions}
            component={MyRequests}
            exact={true}
          />
          <Route path={links.login} component={Login} exact={true} />
          <Route path={links.auth} component={Auth} exact={true} />
          <Protect path={links.addPetition} component={Form} exact-={true} />
          <Protect path={links.admin} component={Admin} exact={true} />
        </Switch>
      </Router>
    </Provider>
  );
};
