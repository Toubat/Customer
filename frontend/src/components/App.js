import React, { useState } from "react";
import { render } from "react-dom";
import configureStore from "../redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import { BroswerRouter as Router, Switch, Route } from "react-router-dom";

import ListCustomerPage from "./ListCustomerPage";
import RegisterCustomerPage from "./RegisterCustomerPage";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={RegisterCustomerPage} />
        <Route path="/customers" component={ListCustomerPage} />
      </Switch>
    );
  }
}

export default App;
