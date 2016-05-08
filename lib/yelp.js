var Yelp = require('yelp');
var config = require('../config.json');


var yelp = new Yelp({
  consumer_key: config['yelp']['consumerKey'],
  consumer_secret: config['yelp']['consumerSecret'],
  token: config['yelp']['token'],
  token_secret: config['yelp']['tokenSecret']
});





module.exports = yelp