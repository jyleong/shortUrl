/* eslint-disable import/prefer-default-export */

import { HELLO_WORLD_NAME_UPDATE } from '../constants/helloWorldConstants';
import types from './types'
import axios from 'axios';

const baseURL = 'http://localhost:3000';

export const postCreateShortUrl = (originalUrl, baseUrl) => async (dispatch) => {
  try {
      dispatch({ type: types.REQUEST_START })
      const payload = {
        originalUrl, baseUrl
      };
      const result = await axios.post(`${baseURL}/api/item`, payload);
      
      const data  = await result.json()
      dispatch({
          type: types.EQUEST_SUCCESS,
          payload: data,
      })
  } catch (error) {
      dispatch({ type: types.REQUEST_ERROR })
  }
}

export const getUrlCode = (urlCode) => async (dispatch) => {
  try {
      dispatch({ type: types.REQUEST_START })
      const result = await axios.get(`${baseURL}/api/item/${urlCode}`)
      const data  = await result.json()
      dispatch({
          type: types.REQUEST_SUCCESS,
          payload: data,
      })
  } catch (error) {
      dispatch({ type: types.REQUEST_ERROR })
  }
}

export const updateName = (text) => ({
  type: HELLO_WORLD_NAME_UPDATE,
  text,
});
