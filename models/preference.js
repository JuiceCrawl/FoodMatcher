'use strict';

var db = require('./database');
var Sequelize = require('sequelize');

var Preference = db.define('Preference', {
  preference: {
    type: Sequelize.STRING,
    defaultValue: 'vegan'
  }
});

module.exports = Preference;