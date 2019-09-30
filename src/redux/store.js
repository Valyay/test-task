import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from "/Users/valyay/projects/test-task/src/redux/reducers/authReducer.js";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(authReducer, {}, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;