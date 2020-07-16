import React from 'react';
import { BrowserRouter, Switch, Route, Wrapper } from 'react-dom';
import Homepage from "./Homepage";
import About from "./About";
import ItemDetails from "./ItemsDetails";
import Header from './Header';
import GlobalStyles from './GlobalStyles';

function App(props) {
  return (
  <BrowserRouter>
    <Wrapper>
      <Header></Header>
      <Switch>
      <Route path="/"><Homepage></Homepage></Route>
      <Route path="/about"><About></About></Route>
      <Route path="/items/:itemId"><ItemDetails></ItemDetails></Route>
      </Switch>
    </Wrapper>
    <GlobalStyles></GlobalStyles>
  </BrowserRouter>
  );
}

export default App;
