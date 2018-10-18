import ReactOnRails from 'react-on-rails';

import UrlShortenerApp from '../bundles/UrlShortener/startup/UrlShortenerApp';

// This is how react_on_rails can see the UrlShortenerApp in the browser.
ReactOnRails.register({
  UrlShortenerApp,
});
