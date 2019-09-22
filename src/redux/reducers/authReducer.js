import { authActions } from "/Users/valyay/projects/test-task/src/redux/actions/authActions.js";

const defaultState = {
	authenticated: false
};

const authReducer = (state = defaultState, action) => {
	switch (action.type) {
		case authActions.login:
			return {
				authenticated: true
			};

		case authActions.logout:
			return {
				authenticated: false
			};

		default:
			return state;
	}
};

export default authReducer;
