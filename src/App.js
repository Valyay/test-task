import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import AuthButton from "./components/AuthButton.js"
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Profile from "./components/Profile.js";
import News from "./components/News.js";


function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<div>
          <AuthButton />
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
