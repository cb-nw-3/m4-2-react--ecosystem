import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path='/'>Homepage</Route>
        <Route path='/about'>About</Route>
      </Switch>
    </Router>
  );
}

export default App;
