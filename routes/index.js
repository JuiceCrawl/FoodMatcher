var express = require('express');
var router = express.Router();
var Preference = require('../models/preference');
var User = require('../models/users');
var yelp = require('../lib/yelp.js');


module.exports = router;


router.get('/',function(req,res,next){
  
  if(!req.query.clicked){
    res.render('index');
    return;
  }
  
  //on button logic?
  if(!req.query.location ||!req.query.term ){
    var errorMessage = "Please Enter a Location and Search Term";
    res.render('index',{'error':errorMessage});
    return;
  }

  var location = req.query.location || 'New York';
  var term = req.query.term || 'vegan';

  yelp.search({ term: term, location: location })
  .then(function (data) {
    res.render('index', {places: data.businesses});
  })
  .catch(function (err) {
        console.error(err.data);
    res.render('index', {error: JSON.parse(err.data).error.text});
  });

});

// router.post('/', function(req, res, next){

// });