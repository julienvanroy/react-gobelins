import { combineReducers } from 'redux';

import login from './login';
import admin from './admin';

const reducers = combineReducers({
  login,
  admin
});

export default reducers;
