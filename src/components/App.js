import React from 'react';
import { 
    BrowserRouter as Router,
    Switch, 
    Route 
} from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Homepage from './Homepage';
import About from './About';
import Error from './Error';

function App(props) {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
            <GlobalStyle />
        </Router>
    );
}

export default App;
