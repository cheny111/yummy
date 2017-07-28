import {combineReducers} from 'redux';
import appReducer from './appReducer.js';
import accountReducer from './accountReducer.js';

const rootReducer=combineReducers({
  account:accountReducer,
  app:appReducer
})

export default rootReducer;
