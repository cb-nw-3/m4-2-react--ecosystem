import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ItemDetails from "./ItemDetails";
import GlobalStyles from "./GlobalStyles";

function App(props) {
  return (
    <Router>
      <div>
        <GlobalStyles />
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
      </div>
    </Router>
  );
}

export default App;
