import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';

console.log('reducers:', reducers);

const logger = createLogger();
const combinedReducers = combineReducers(reducers);

export default createStore(combinedReducers, {}, applyMiddleware(logger, thunk));