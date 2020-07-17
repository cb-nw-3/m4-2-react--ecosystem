import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router
  , Switch, Route
} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import ItemDetails from './ItemDetails';

import { createGlobalStyle } from "styled-components";


function App(props) {
  return (
    <Router>
      <Header />
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/items/:itemId">
            <ItemDetails />
          </Route>
        </Switch>
      </Wrapper>
      <GlobalStyles />
    </Router>
  )
}

const GlobalStyles = createGlobalStyle`
  /* reset css
  */
  
  body {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	font-size: 100%;
  	font: inherit;
  	vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
  	display: block;
  }
  body {
  	line-height: 1;
  }
  ol, ul {
  	list-style: none;
  }
  
  
  * {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }

  body{
    background: #f0f0fc;
  }
`;

const Wrapper = styled.div`
  margin: 0 20px;
`

export default App;
