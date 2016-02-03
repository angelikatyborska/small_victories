'use strict';

require('moment');
var angularMoment = require('angular-moment');
var angular = require('angular');
var app = angular.module('smallVictories', ['angularMoment']);
app.run(function(amMoment) {
  amMoment.changeLocale('en');
});

require('./services');
require('./controllers');
