import React from "react";
import styled from "styled-components";
// exercise 1 : routes + links
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import ItemPage from "./ItemPage";
// import GlobalStyles from "./GlobalStyles";
// import ItemDetails from "./ItemDetails";

// exercise 1 : routes + links
function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/items/:itemId">
          <ItemPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );

  //return "Hello world!";
}

const Wrapper = styled.header`
  display: flex;
  /* max-width: 800px;
  margin: auto; */
`;

const Title = styled.h1`
  font-size: 32px;
  /*  padding-top: 32px;
  padding-bottom: 32px; */
`;

export default App;
