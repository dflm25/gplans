/**
 * Store config
 */

import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import RootReducer from '../reducers';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Redux store.
 */

const store = createStore(
  RootReducer,
  compose(applyMiddleware(ReduxThunk)),
);

persistStore(store);

export default store;
