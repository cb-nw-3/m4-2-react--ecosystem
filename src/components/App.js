import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Homepage from './Homepage';
import About from './About';

function App(props) {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact={true} path="/">
          <Homepage />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
