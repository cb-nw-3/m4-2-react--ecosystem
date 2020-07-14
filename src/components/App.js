import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import ItemDetails from "./ItemDetails"

function App(props) {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/about" exact>
					<About />
				</Route>
				<Route path="/items/:itemId">
          <ItemDetails />
        </Route>
			</Switch>
		</Router>
	);
}

export default App;
