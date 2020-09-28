import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import App from "./pages/App.jsx";
import Index from "./pages/Index";
import Requests from "./pages/Requests";
import RequestById from "./pages/RequestDetail";

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
          <Route path="/req/:reqId" component={RequestById} />
          <Route path="/app" component={App} exact={true} />
        </Switch>
      </Router>
    </Provider>
  );
};
