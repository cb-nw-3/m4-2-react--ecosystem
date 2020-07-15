import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Header from './Header';

function App(props) {
  return (
    <Router>
      {/* <Header></Header> */}
      <Switch>
        <Route path='/'>Home</Route>
        <Route path='/about'>About</Route>
      </Switch>
    </Router>
  );
}

export default App;
