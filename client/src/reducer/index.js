import { combineReducers } from 'redux';

import login from './login';
import admin from './admin';
import home from './home';

const reducers = combineReducers({
  login,
  admin,
  home
});

export default reducers;
