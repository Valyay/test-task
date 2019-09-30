import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { login } from "/Users/valyay/projects/test-task/src/redux/actions/authActions.js";
import { withRouter } from "react-router-dom";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
            username: '',
            password: '',
        };
		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

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
		const { username, password } = this.state;

        if (username && password) {
			this.props.login(username, password);
        }
	};

	render() {
		let { from } = this.props.location.state || { from: { pathname: "/" } };
		let {username, password} = this.state;
		let { authenticated } = this.props;

		if(authenticated){
			this.props.history.push("/profile");
		}


		return (
			<div>
				<p>You must log in to view the page at {from.pathname}</p>
				<form onSubmit={this.handleSubmit}>
					<FormGroup controlId="username">
						<FormLabel>Username</FormLabel>
						<FormControl
							autoFocus
							type="text"
							value={username}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<FormGroup controlId="password">
						<FormLabel>Password</FormLabel>
						<FormControl
							value={password}
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

const mapStateToProps = (state) => {
	return {
	  isLoginPending: state.isLoginPending,
	  isLoginSuccess: state.isLoginSuccess,
	  authenticated: state.authenticated,
	  loginError: state.loginError
	};
  }
  
  const mapDispatchToProps = (dispatch) => {
	return {
	  login: (username, password) => dispatch(login(username, password))
	};
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Login));
