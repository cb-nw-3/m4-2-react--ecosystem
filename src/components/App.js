import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Homepage from './Homepage';
import About from './About';

function App(props) {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/'>
          <Homepage></Homepage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
