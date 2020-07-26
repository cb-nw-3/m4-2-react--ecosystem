import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import ItemDetails from "./ItemDetails";

function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
          About
        </Route>
        <Route exact path="/items/:itemId">
          <ItemDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
// Router({exact: true, path: "/"}, <p>)
export default App;
