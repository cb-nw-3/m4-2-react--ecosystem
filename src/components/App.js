import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import Homepage from './Home';
import About from './About';
import GlobalStyles from './GlobalStyles';
import ItemDetails from './ItemDetails';

function App(props) {
  // console.log(Object.values(props));
  return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path='/'>
            <Homepage array={Object.values(props)}/>
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
          <Route exact path='/items/:itemId'>
            <ItemDetails array={Object.values(props)}/>
          </Route>
        </Switch>
        <GlobalStyles/>
    </Router>
    
  );
}

export default App;
