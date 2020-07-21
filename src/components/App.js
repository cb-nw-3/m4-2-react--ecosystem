import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Added import for exercise 1

import Header from './Header';
import Home from './Home';
import About from './About';
import ItemDetails from './ItemDetails'; //Added as part of Exercice 3

function App(props) {
  // console.log(props);
  return (
    // Deleted "Hello Word" and entered following code.
    <Router>
      {/* Added Header tag and component file */}
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        {/* Added as part of Exercice 3 */}
        <Route path="/items/:itemId">
          <ItemDetails />
        </Route>
        {/* Added as part of Exercice 3 */}
      </Switch>
    </Router>
    //
  );
}

const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
`;

const Main = styled.main`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export default App;
