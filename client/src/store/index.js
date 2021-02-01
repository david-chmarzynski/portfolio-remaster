import {
  createStore,
  compose
} from 'redux';

// IMPORT REDUCERS
import reducers from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers();

const store = createStore(
  reducers,
  enhancers
);

export default store;