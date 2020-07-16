import React from 'react';
// https://gist.github.com/siakaramalegos/df4620c52e829f6107c75d5c3f0ad7f5
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './Header'

function App(props) {
  return (
    <BrowserRouter>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">home</Route>
            <Route path="/about">about</Route>
            <Route path="/items">item</Route>
          </Switch>
        </Router>
    </BrowserRouter>
  );
}

export default App;
