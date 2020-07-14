import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router
  , Switch, Route
} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';


function App(props) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route path="/about">
          About
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
