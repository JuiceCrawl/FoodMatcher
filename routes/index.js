var express = require('express');
var router = express.Router();
var Preference = require('../models/preference');
var User = require('../models/users');
var yelp = require('../lib/yelp.js');


module.exports = router;


router.get('/',function(req,res,next){
  console.log(req.body.location);

  var location = req.body.location || 'New York';
  var term = req.body.term || 'vegan';

  yelp.search({ term: term, location: location })
  .then(function (data) {
    console.log(data.businesses[0].name);
    res.render('index', {places: data.businesses});
  })
  .catch(function (err) {
    console.error(err);
  });

});

router.post('/', function(req, res, next){

});