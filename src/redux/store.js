import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from "./reducers/authReducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(authReducer, {}, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;