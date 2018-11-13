import PropTypes from 'prop-types';
import React from 'react';

// ui stuff
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    if (this.state.originalUrl == null || this.state.originalUrl == "") {
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
    
    let shortenedUrl = hasError ? (<Typography variant='h6' align='center' color='error' gutterBottom>Server Error</Typography>) : null;

    shortenedUrl = (shortUrl && shortUrl != "" && urlCode && urlCode != "") ? 
      (<Typography variant='h6' align='left' gutterBottom>
        Shortened Url: <a href={`${shortUrl}:8080/${urlCode}`} target="_blank"> {shortUrl}/{urlCode}</a>
      </Typography>) : shortenedUrl;
    return (
      <div>
        <Typography variant='display2' align='left' gutterBottom>
          React on Rails urlShortener
        </Typography>
        <hr />
        <form onSubmit={this.postUrl}>
          
          <Typography variant='h6' align='left' gutterBottom>
            Original URL:
          </Typography>
          <Typography variant='subtitle1' align='left' color='primary' gutterBottom>
            Ex: https://stackoverflow.com/questions/38817797/react-on-rails-passing-and-formatting-props
          </Typography>
          
          <TextField
            name='originalUrl'
            label='Original Url'
            value={this.state.originalUrl}
            onChange={this.handleOriginalUrlChange}
            fullWidth
            margin={'normal'}
          />
          <br />
          <Typography variant='h6' align='left' gutterBottom>
            Base URL:
          </Typography>

          <TextField
            name='baseUrl'
            label='Base Url'
            value={this.state.baseUrl}
            onChange={this.handleBaseUrlChange}
            fullWidth
            margin={'normal'}
          />
          <br />
          <Button type="submit" variant={'contained'} color={'primary'} fullWidth>
            Submit
          </Button>
        </form>
        <br />
        { shortenedUrl }
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
