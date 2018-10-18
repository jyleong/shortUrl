import PropTypes from 'prop-types';
import React from 'react';


class UrlShortener extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { isLoading, hasError, originalUrl, shortUrl, urlCode } = this.props
    return (
      <div>
        <hr />
        <form >
          <label htmlFor="Url">
            Original URL:
          </label>
          <h3>
            Ex: https://stackoverflow.com/questions/38817797/react-on-rails-passing-and-formatting-props
          </h3>
          <input
            id="originalUrl"
            type="text"
            value={originalUrl}
            onChange={(e) => updateName(e.target.value)}
            />
          <hr />
          <label htmlFor="Url">
            Base URL:
          </label>
          <input id="baseUrl" type="text" value="http://localhost"/>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <hr />
        <h3>
        Shortened Url: {shortUrl}
        </h3>
      </div>
    )
  }

}

UrlShortener.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default UrlShortener;
