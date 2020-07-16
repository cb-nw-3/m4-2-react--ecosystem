import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";

import About from "./About";

import Home from "./Home";

import ItemDetails from "./ItemsDetails";

import GlobalStyle from "./GlobalStyles";

function App(props) {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/items/:itemId">
          <ItemDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
