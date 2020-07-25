import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Homepage from './Homepage';
import About from './About';
import ItemDetails from './ItemDetails';
import Error from './Error';

function App(props) {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Homepage />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
                <Route exact path='/items/:itemId'>
                    <ItemDetails />
                </Route>
                <Route>
                    {/* TODO: fix 404 redirect from items id page */}
                    <Error />
                </Route>
            </Switch>
            <GlobalStyles />
        </Router>
    );
}

export default App;
