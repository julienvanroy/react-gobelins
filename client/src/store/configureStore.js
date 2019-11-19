import { createStore } from 'redux';
import reducers from '../reducer';

const configureStore = () => {
  return createStore(
    reducers,
  );
};

export default configureStore;
