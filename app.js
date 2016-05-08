var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var swig = require('swig');
var router = require('./routes');
var app = express();
var port = 3000;

var force = false;

var Preference = require('./models/preference');
var Users = require('./models/users');

// swig setup 

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });



//sync our models
Users.User.sync({force:force})
.then(function () {
    return Preference.sync({force:force});
})
.then(function () {
    return Users.UserPreference.sync({force:force});
})
.then(function () {
    app.listen(port, function () {
        console.log('Server is listening on port ' + port + '!');
    });
})
.catch(console.error);

//middleware
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);

