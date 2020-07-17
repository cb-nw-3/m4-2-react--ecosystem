import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import About from "./About";
import Items from "./Items";
import Home from "./Home";
import Header from "./Header";

import { createGlobalStyle } from "styled-components";

function App(props) {
  return (
    <Router>
      <div>
        <GlobalStyles></GlobalStyles>

        <Header></Header>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/items">
            <Items />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Lato', sans-serif;
  }

  p {
    line-height: 1.3;
  }
`;

export default App;
