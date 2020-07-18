import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";

function App(props) {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="/about">
            About
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
