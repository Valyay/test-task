import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import News from "./components/News";

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<div>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/news">News</Link>
							</li>
							<li>
								<Link to="/profile">Profile</Link>
							</li>
						</ul>

						<hr />

						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/news" component={News} />
						<PrivateRoute path="/profile" component={Profile} />
					</div>
				</header>
			</div>
		</Router>
	);
}

export default App;
