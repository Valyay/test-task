import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import News from "./components/News";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let { authenticated } = this.props;
		return (
			<Router>
				<Navbar />
				{authenticated && <Logout />}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/news" component={News} />
					<PrivateRoute path="/profile" component={Profile} />
				</Switch>
			</Router>
		);
	}
}
const mapStateToProps = state => {
	return {
		authenticated: state.authenticated
	};
};

export default connect(
	mapStateToProps,
	null
)(App);
