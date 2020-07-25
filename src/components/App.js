import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './Header';

function App(props) {
  return (
    <Router>
      <Header>
      </Header>
      <Switch>
        <Route exact path='/'>
          Home Page
        </Route>
        <Route exact path='/about'>
          About Page
        </Route>
        <Route exact path='/items/:itemId'>
          Item Id
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
