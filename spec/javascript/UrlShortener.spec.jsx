import React from 'react';
import {shallow} from 'enzyme';
import UrlShortener from '../../app/javascript/bundles/UrlShortener/components/UrlShortener';
import urlShortenerReducer, {initState} from '../../app/javascript/bundles/UrlShortener/reducers/urlShortenerReducer';
import types from '../../app/javascript/bundles/UrlShortener/actions/types';

describe('UrlShortener Component Test', () => {
    const shallowFunc = () => {console.log('test')};
    const wrapper = shallow(
    <UrlShortener 
        isLoading={false} 
        hasError={false} 
        postCreateShortUrl={shallowFunc}
        getUrlCode={shallowFunc}
    />)
    it('Renders 1 <UrlShortener /> component', () => {
        expect(wrapper).toHaveLength(1)
    })
    it('Renders props correctly', () => {
        expect(wrapper.instance().props.isLoading).toEqual(false)
    })
    it('Renders component with initial state correctly', () => {
        expect(wrapper.state().baseUrl).toEqual("http://localhost");
        expect(wrapper.state().originalUrl).toEqual("");
        
    })
});

describe('UrlShortener Reducer Test', () => {
    it('Request Start test', () => {
        const action = {
            type: types.REQUEST_START,
        };
        const expectedState = {
            ...initState,
            isLoading: true,
        }
        expect(urlShortenerReducer(initState, action)).toEqual(expectedState);
    })

    it('Request Success test', () => {
        const action = {
            type: types.REQUEST_SUCCESS,
            payload: {
                originalUrl: 'www.google.ca',
                shortUrl: 'http://localhost:3000',
                urlCode: 'Xxxxx',
            }
        };
        const expectedState = {
            ...initState,
            data: {
                originalUrl: action.payload.originalUrl,
                shortUrl: action.payload.shortUrl,
                urlCode: action.payload.urlCode,
            }
        };
        expect(urlShortenerReducer(initState, action)).toEqual(expectedState);
    })

    it('Request Error test', () => {
        const action = {
            type: types.REQUEST_ERROR,
        };
        const expectedState = {
            ...initState,
            hasError: true,
        }
        expect(urlShortenerReducer(initState, action)).toEqual(expectedState);
    })
});

