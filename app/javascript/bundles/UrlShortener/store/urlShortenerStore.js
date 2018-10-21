import { createStore, applyMiddleware, compose } from 'redux';
import urlShortenerReducer, {initState} from '../reducers/urlShortenerReducer';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create store and allow for redux devtools to hook onto it

const configureStore = (railsProps) => (
  createStore(
    urlShortenerReducer, 
    railsProps,
    composeEnhancers(applyMiddleware(thunk))
));

export default configureStore;
