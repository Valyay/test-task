import { loginRequest, loginSuccess, loginError, logoutAction } from "../actions/authConstants";

export function login(username, password) {
  return dispatch => {
      dispatch(loginRequest(false));
      if (username === 'Admin' && password === '12345') {
        dispatch(loginSuccess(true));
        localStorage.setItem('auth', true);
      } else {
        dispatch(loginError('Invalid username and password'));
      }
    };
  }

  export function logout() {
    return dispatch => {
        dispatch(logoutAction());
        localStorage.removeItem('auth');
      };
    }

