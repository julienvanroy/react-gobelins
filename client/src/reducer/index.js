import { combineReducers } from 'redux';

import login from './login';
import admin from './admin';
import home from './home';
import single from './single';

const reducers = combineReducers({
  login,
  admin,
  home,
  single
});

export default reducers;
