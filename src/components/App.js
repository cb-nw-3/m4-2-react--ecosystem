import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import styled from "styled-components";
import ItemDetails from "./ItemDetails";

const Container = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;

function App(props) {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/items/:id">
            <ItemDetails />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
