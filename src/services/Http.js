/**
 * Request handler http
 */

import axios from 'axios';

/**
 * @file Http.js
 * @author Daniel Felipe Lucumi Marin
 * @description Axios request handler
 */

axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      console.log('Errores', error.response.status);
    }
    return Promise.reject(error);
  },
);

export default axios;