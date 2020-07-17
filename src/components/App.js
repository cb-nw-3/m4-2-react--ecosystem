import React from 'react';
import { 
    BrowserRouter as Router,
    Switch, 
    Route 
} from 'react-router-dom';

import Header from './Header';

function App(props) {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route>
                        <ErrorPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

const Homepage = () => {
    return 'Home';
};

const About = () => {
    return 'About';
};

const ErrorPage = () => {
    return <h3>Error</h3>;
};

export default App;
