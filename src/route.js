import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

import App from "./pages/App.jsx";
import Test from "./pages/Test";

export default () => {
  store.subscribe(() => {
    console.log(store.getState());
  });
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Test} exact={true} />
          <Route path="/app" component={App} exact={true} />
        </Switch>
      </Router>
    </Provider>
  );
};
