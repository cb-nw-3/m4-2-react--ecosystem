import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/items/:itemId">Item detail</Route>
      </Switch>
      <Route exact path="/about">
        <About />
      </Route>
    </Router>
  );
}

export default App;
