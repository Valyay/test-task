const LOGIN_REQUEST = 'USERS_LOGIN_REQUEST';
//const LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS';
//const LOGIN_FAILURE = 'USERS_LOGIN_FAILURE';

const LOGOUT = 'USERS_LOGOUT';// action types

const login = () => {
    return {
      type: LOGIN_REQUEST
    }
  };
  
  const logout = () => {
    return {
      type: LOGOUT
    }
  };

  export const authActions = {
    login,
    logout
};

