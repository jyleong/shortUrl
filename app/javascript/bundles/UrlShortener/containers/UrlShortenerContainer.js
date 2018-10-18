// Simple example of a React "smart" component

import { connect } from 'react-redux';
import UrlShortener from '../components/UrlShortener';
import * as actions from '../actions/urlShortenerActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ isLoading: state.isLoading,
    hasError: state.hasError,
    originalUrl: state.data.originalUrl,
    shortUrl: state.data.shortUrl,
    urlCode: state.data.urlCode,
 });

// Don't forget to actually use connect!
// Note that we don't export UrlShortener, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, actions)(UrlShortener);
