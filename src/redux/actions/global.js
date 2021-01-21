/**
 * Global actions redux
 */

import { SET_LOADING } from '../constants';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Redux store.
 */

/**
 * Show/hide loading general to all app
 * @param  { bool } loading - Indcate if show/hide loading
 * @return { object } An action object with a type of SET_LOADING
 */
export const setLoading = (loading) => ({ type: SET_LOADING, payload: { loading } });