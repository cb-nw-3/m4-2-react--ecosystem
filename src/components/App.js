import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";

function App(props) {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/">Homepage</Route>
          <Route path="/about">About</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
