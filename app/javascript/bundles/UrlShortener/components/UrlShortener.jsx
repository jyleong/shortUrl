import PropTypes from 'prop-types';
import React from 'react';

class UrlShortener extends React.Component {
  constructor(props) {
    super(props);
    this.postUrl = this.postUrl.bind(this);
    this.handleOriginalUrlChange = this.handleOriginalUrlChange.bind(this);
    this.handleBaseUrlChange = this.handleBaseUrlChange.bind(this);
    this.state = {
      originalUrl: "",
      baseUrl: "http://localhost",
    }
  }

  postUrl(e) {
    e.preventDefault();
    if (originalUrl == null || originalUrl == "") {
      console.log('original url is blank');
      return;
    }
    this.props.postCreateShortUrl(this.state.originalUrl, this.state.baseUrl);
  }

  handleOriginalUrlChange(e) {
    this.setState({originalUrl: e.target.value});
  }

  handleBaseUrlChange(e) {
    this.setState({baseUrl: e.target.value});
  }
  render() {
    const { isLoading, hasError, originalUrl, shortUrl, urlCode } = this.props
    return (
      <div>
        <hr />
        <form onSubmit={this.postUrl}>
          <label htmlFor="Url">
            Original URL:
          </label>
          <h3>
            Ex: https://stackoverflow.com/questions/38817797/react-on-rails-passing-and-formatting-props
          </h3>
          <input
            id="originalUrl"
            type="text"
            value={this.state.originalUrl}
            onChange={this.handleOriginalUrlChange}
            />
          <hr />
          <label htmlFor="Url">
            Base URL:
          </label>
          <input 
            id="baseUrl" 
            type="text" 
            value={this.state.baseUrl}
            onChange={this.handleBaseUrlChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        <hr />
        { shortUrl && shortUrl != "" && urlCode && urlCode != "" &&
          <h3>
            Shortened Url: 
              <a href={this.props.originalUrl} target="_blank"> {shortUrl}/{urlCode}</a>
          </h3>
        }
      </div>
    )
  }

}

UrlShortener.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  postCreateShortUrl: PropTypes.func.isRequired,
  getUrlCode: PropTypes.func.isRequired,
};

export default UrlShortener;
