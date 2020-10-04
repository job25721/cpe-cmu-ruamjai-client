import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import App from "./pages/App.jsx";
import Index from "./pages/Index";
import MyRequests from "./pages/MyRequests";
import Requests from "./pages/Requests";
import Home from "./pages/Home";
import Form from "./pages/Form";

export default () => {
  store.subscribe(() => {
    console.log(store.getState());
  });
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Index} exact={true} />
          <Route path="/requests" component={Requests} exact={true} />
          <Route path="/app" component={App} exact={true} />
          <Route path="/mine" component={MyRequests} exact={true} />
          <Route path="/Home" component={Home} exact={true} />
          <Route path="/Form" component={Form} exact-={true} />
        </Switch>
      </Router>
    </Provider>
  );
};
