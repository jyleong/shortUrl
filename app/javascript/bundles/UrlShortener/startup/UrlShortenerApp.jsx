import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/urlShortenerStore';
import UrlShortenerContainer from '../containers/UrlShortenerContainer';

import 'typeface-roboto';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const UrlShortenerApp = (props) => (
  <Provider store={configureStore(props)}>
    <UrlShortenerContainer />
  </Provider>
);

export default UrlShortenerApp;
