'use strict';

var angular = require('angular');

require('moment');
require('angular-moment');
require('angular-resource');

var app = angular.module('smallVictories', ['ngResource', 'angularMoment']);

app.run(function(amMoment) {
  amMoment.changeLocale('en');
});

require('./services');
require('./controllers');
