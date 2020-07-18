import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import About from "./About";
import ItemDetails from "./ItemsDetails";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Lato', sans-serif;
    margin-right: 53px;
  }
`;



//Create two new components, `Home` and `About` and render them for their respective routes:
export default App;
function App(props) {
  return (
  <Router>
    
     
      <Switch>
        <Route exact path="/"><Homepage /></Route>
        <Route exact path="/about"><About /></Route>
        <Route path="/items/:itemId"><ItemDetails /></Route>
      </Switch>
    
    <GlobalStyle />
  </Router>
  );
}


