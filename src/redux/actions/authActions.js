import { setLoginPending, setLoginSuccess, setLoginError } from "../actions/authConstants";

export function login(username, password) {
  return dispatch => {
      dispatch(setLoginPending(false));
      if (username === 'Admin' && password === '12345') {
        dispatch(setLoginSuccess(true));
        localStorage.setItem('auth', true);
      } else {
        dispatch(setLoginError('Invalid username and password'));
      }
    };
  }

