/**
 * Reducers
 */

import { combineReducers } from 'redux';
import persistStore from './persistStore';
import Global from './global';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Redux store.
 */

const RootReducer = combineReducers({ 
  Global,
  persistStore
});

export default RootReducer;