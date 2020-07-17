import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import About from "./About";
import ItemDetails from "./ItemsDetails";
import Header from './Header';
import GlobalStyles from './GlobalStyles';


function App(props) {
  return (
  <Router>
    
      <Header></Header>
      <Switch>
      <Route path="/"><Homepage></Homepage></Route>
      <Route path="/about"><About></About></Route>
      <Route path="/items/:itemId"><ItemDetails></ItemDetails></Route>
      </Switch>
    
    <GlobalStyles></GlobalStyles>
  </Router>
  );
}

export default App;
