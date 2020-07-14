import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header";
import About from "./About";
import Homepage from "./Homepage";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 30px;
  }
`;

function App(props) {
  return (
    <Router>
      <GlobalStyle />
      <Header></Header>
      <Switch>
        <Route path="/items/:itemId">Specific Item Page</Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
