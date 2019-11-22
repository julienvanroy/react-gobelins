import { combineReducers } from 'redux';

import login from './login';
import admin from './admin';
import home from './home';
import single from './single';
import favorites from './favorites';

const reducers = combineReducers({
  login,
  admin,
  home,
  single,
  favorites
});

export default reducers;
