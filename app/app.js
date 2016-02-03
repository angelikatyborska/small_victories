'use strict';

var angular = require('angular');

require('moment');
require('angular-route');
require('angular-moment');
require('angular-resource');

var app = angular.module('smallVictories', ['ngRoute', 'ngResource', 'angularMoment']);

app.run(function(amMoment) {
  amMoment.changeLocale('en');
});

require('./services');
require('./controllers');

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/latest/:page', {
      templateUrl: 'app/partials/victories-table.html',
      controller: 'VictoriesController'
    }).
    when('/latest', {
      redirectTo: '/latest/1'
    }).
    when('/best', {
      templateUrl: 'app/partials/victories-table.html',
      controller: 'VictoriesController'
    }).
    when('/worst', {
      templateUrl: 'app/partials/victories-table.html',
      controller: 'VictoriesController'
    }).
    otherwise({
      redirectTo: '/latest'
    });
  }
]);