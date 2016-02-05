'use strict';

var angular = require('angular');

require('moment');
require('angular-route');
require('angular-cookies');
require('angular-moment');
require('angular-resource');
require('ng-token-auth');

var app = angular.module('smallVictories', ['ngRoute', 'ngResource', 'ng-token-auth', 'angularMoment']);

require('./app.config');
require('./app.routes');

require('./services');
require('./controllers');
