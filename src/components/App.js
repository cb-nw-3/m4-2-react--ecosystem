import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Homepage from './Homepage';
import About from './About';
import GlobalStyles from './GlobalStyles';

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
      <GlobalStyles/>
    </Router>
  );
}

export default App;
