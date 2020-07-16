import React from 'react';
// https://gist.github.com/siakaramalegos/df4620c52e829f6107c75d5c3f0ad7f5
import { BrowserRouter as Router, Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import Header from './Header'

function App(props) {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/">Route '/'</Route>
          <Route path="/about">Route '/about'</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
