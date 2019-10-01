import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../redux/actions/authActions";

class Logout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<button
				onClick={() => {
					this.props.logout(() => this.props.history.push("/"));
				}}
			>
				Logout
			</button>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(logout())
	};
};

export default withRouter(
	connect(
		null,
		mapDispatchToProps
	)(Logout)
);
