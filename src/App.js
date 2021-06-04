//jshint esversion:9
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/LOGIN/Login";
import Signup from "./Pages/SIGNUP/Signup";
import Dashboard from "./Pages/DASHBOARD/Dashboard";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<LandingPage />
					</Route>

					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/signup">
						<Signup />
					</Route>
					<Route exact path="/dashboard">
						<Dashboard />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
