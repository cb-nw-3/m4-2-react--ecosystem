import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './Header';
import About from './About';
import Home from './Home';
import ItemDetail from './ItemDetails';

function App(props) {
  return (
    <Router>
      <Header>
      </Header>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/items/:itemId'>
          <ItemDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
