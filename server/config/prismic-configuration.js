let Configuration = {

  // apiEndpoint: 'https://lesbonneschoses.prismic.io/api',
  apiEndpoint: 'https://newrules.prismic.io/api',

  // -- Access token if the Master is not open
  // accessToken: 'xxxxxx',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  // -- Links resolution rules
  linkResolver(doc) {
    return false;
  },

  // -- What to do in the event of an error from prismic.io
  onPrismicError(err, req, res) {
    res.send(500, "Error 500: " + err.message);
  }

};

export default Configuration;
