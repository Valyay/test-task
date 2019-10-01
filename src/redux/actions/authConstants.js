const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';
const LOGOUT = 'LOGOUT';

export function loginRequest(isLoginRequest) {
  return {
    type: LOGIN_REQUEST,
    isLoginRequest
  };
}

export function loginSuccess(isLoginSuccess) {
  return {
    type: LOGIN_SUCCESS,
    isLoginSuccess
  };
}

export function loginError(loginError) {
  return {
    type: LOGIN_ERROR,
    loginError
  }
}

export function logoutAction() {
  return {
    type: LOGOUT
  }
}

export const authConstants = {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT
}