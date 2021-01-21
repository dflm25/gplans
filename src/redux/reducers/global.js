/**
 * Global reducers
 */
import { SET_LOADING } from '../constants';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Redux store.
 */

const initialState = {
  loading: false,
}

const Global = (state = initialState, { type, payload = null}) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload.loading
      };
    default:
      return state;
  }
}

export default Global;