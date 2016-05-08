'use strict';

var db = require('./database');
var Sequelize = require('sequelize');
var Preference = require('./preference');

var User = db.define('User', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
});


var UserPreference = db.define('UserPreference', {
});

Preference.belongsToMany(User, {through: UserPreference});
User.belongsToMany(Preference, {through: UserPreference});

module.exports = {User:User,UserPreference:UserPreference};