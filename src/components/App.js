import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";

import GlobalStyle from "./GlobalStyles";

function App(props) {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          Homepage
        </Route>
        <Route exact path="/about">
          About
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
