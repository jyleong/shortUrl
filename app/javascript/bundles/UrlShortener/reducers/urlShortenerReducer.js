
import types from '../actions/types';

export const initState = {
  isLoading: false,
  hasError: false,
  data: {},
};

const urlShortenerReducer = (state = initState, action) => {
    switch (action.type) {
        case types.REQUEST_START:
            return {
                ...state,
                isLoading: true,
                hasError: false,
            }
        case types.REQUEST_SUCCESS:
            return {
                isLoading: false,
                hasError: false,
                data: {
                    originalUrl: action.payload.originalUrl,
                    shortUrl: action.payload.shortUrl,
                    urlCode: action.payload.urlCode,
                }
            }

        case types.REQUEST_ERROR:
            return {
                isLoading: false,
                hasError: true,
                data: {},
            }
        default:
            return state
    }
};

export default urlShortenerReducer;