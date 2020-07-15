import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import ItemDetails from "./ItemDetails";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/items/:itemId">
          <ItemDetails />
        </Route>
      </Switch>
      <Route exact path="/about">
        <About />
      </Route>
    </Router>
  );
}

export default App;
