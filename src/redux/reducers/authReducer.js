import { authConstants } from "../actions/authConstants";

const defaultState = {
	authenticated: false,
	isLoginSuccess: false,
	isLoginPending: false,
	loginError: null
};
export default function authReducer(state = defaultState, action) {
	switch (action.type) {
		case authConstants.SET_LOGIN_PENDING:
			return Object.assign({}, state, {
				isLoginPending: action.isLoginPending
			});

		case authConstants.SET_LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isLoginSuccess: action.isLoginSuccess,
				authenticated: true
			});

		case authConstants.SET_LOGIN_ERROR:
			return Object.assign({}, state, {
				loginError: action.loginError
			});

		default:
			return state;
	}
}
