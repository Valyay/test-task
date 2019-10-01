import { authConstants } from "../actions/authConstants";

const defaultState = {
	authenticated: false,
	isLoginSuccess: false,
	isLoginRequest: false,
	loginError: null,
};
export default function authReducer(state = defaultState, action) {
	switch (action.type) {
		case authConstants.LOGIN_REQUEST:
			return Object.assign({}, state, {
				isLoginPending: action.isLoginPending
			});

		case authConstants.LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isLoginSuccess: action.isLoginSuccess,
				authenticated: true
			});

		case authConstants.LOGIN_ERROR:
			return Object.assign({}, state, {
				loginError: action.loginError
			});

		case authConstants.LOGOUT:
			return defaultState;

		default:
			return state;
	}
}
