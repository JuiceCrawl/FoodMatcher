'use strict';

//var config = require('../config/config.json');
var Sequelize = require('sequelize');

//module.exports = new Sequelize(config.database, config.username, config.password, config);
module.exports = new Sequelize('postgres://localhost:5432/foodmatcher', {
    logging: false
});