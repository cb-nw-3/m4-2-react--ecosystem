import React from 'react';
// https://gist.github.com/siakaramalegos/df4620c52e829f6107c75d5c3f0ad7f5
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './Header';
import About from './About';
import Homepage from './Homepage';
import ItemDetails from './ItemDetails';
import Sellers from './Sellers';
import SellerDetail from './SellerDetail';

function App(props) {
  return (
    <BrowserRouter>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/items/:itemId">
              <ItemDetails />
            </Route>
            <Route exact path="/sellers">
              <Sellers />
            </Route>
            <Route path="/sellers/:sellerId">
              <SellerDetail />
            </Route>
          </Switch>
        </Router>
    </BrowserRouter>
  );
}

export default App;
