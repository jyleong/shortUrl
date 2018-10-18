import { createStore } from 'redux';
import urlShortenerReducer, {initState} from '../reducers/urlShortenerReducer';

const configureStore = (railsProps) => (
  createStore(urlShortenerReducer, railsProps)
);

export default configureStore;
