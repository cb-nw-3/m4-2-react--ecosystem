import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";

function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true}>
          <Homepage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
