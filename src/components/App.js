import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from './Header';

function App(props) {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path='/about'>About</Route>
        <Route path='/'>Home</Route>
      </Switch>
    </Router>
  );
}

export default App;
