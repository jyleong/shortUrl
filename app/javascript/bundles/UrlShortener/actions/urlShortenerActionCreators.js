/* eslint-disable import/prefer-default-export */

import types from './types'
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const postCreateShortUrl = (originalUrl, baseUrl) => async (dispatch) => {
    try {
        dispatch({ type: types.REQUEST_START })
        const payload = {
            originalUrl, 
            shortUrl: baseUrl
        };
        const result = await axios.post(`${BASE_URL}/api/item`, payload);
        const data  = result.data;
        dispatch({
            type: types.REQUEST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({ type: types.REQUEST_ERROR })
    }
}

export const getUrlCode = (urlCode) => async (dispatch) => {
    try {
        dispatch({ type: types.REQUEST_START })
        const result = await axios.get(`${BASE_URL}/api/item/${urlCode}`)
        const data  = result.data;
        dispatch({
            type: types.REQUEST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({ type: types.REQUEST_ERROR })
    }
}