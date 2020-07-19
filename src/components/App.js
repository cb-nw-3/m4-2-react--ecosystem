import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";

function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          Homepage
        </Route>
        <Route path="/about">About</Route>
        <Route path="/items/:id">Items</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
