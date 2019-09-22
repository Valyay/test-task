import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			redirectToReferrer: false
		};
	}

	login = () => {
		if (this.state.username === "Admin" && this.state.password === "12345") {
				localStorage.setItem("redirectToReferrer", true);
				this.setState({ redirectToReferrer: true });
		} else {
			this.setState({ username: "", password: "" });
			alert("Имя пользователя или пароль введены неверно");
		}
	};

	validateForm() {
		return this.state.username.length > 0 && this.state.password.length > 0;
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
	};

	render() {
		let { from } = this.props.location.state || { from: { pathname: "/" } };
		let { redirectToReferrer } = this.state;

		if (redirectToReferrer) return <Redirect to={from} />;

		return (
			<div>
				<p>You must log in to view the page at {from.pathname}</p>
				<form onSubmit={this.handleSubmit}>
					<FormGroup controlId="username">
						<FormLabel>Username</FormLabel>
						<FormControl
							autoFocus
							type="text"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup controlId="password">
						<FormLabel>Password</FormLabel>
						<FormControl
							value={this.state.password}
							onChange={this.handleChange}
							type="password"
						/>
					</FormGroup>
					<Button
						onClick={this.login}
						block
						disabled={!this.validateForm()}
						type="submit"
					>
						Login
					</Button>
				</form>
			</div>
		);
	}
}

export default Login;
