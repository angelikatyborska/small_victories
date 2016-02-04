'use strict';

var angular = require('angular');

require('moment');
require('angular-route');
require('angular-cookies');
require('angular-moment');
require('angular-resource');
require('ng-token-auth');

var app = angular.module('smallVictories', ['ngRoute', 'ngResource', 'ng-token-auth', 'angularMoment']);

app.run(function(amMoment) {
  amMoment.changeLocale('en');
});

require('./services');
require('./controllers');

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/latest/:page', {
      templateUrl: 'app/partials/victoriesTable.html',
      controller: 'VictoriesController'
    }).
    when('/best/:page', {
      templateUrl: 'app/partials/victoriesTable.html',
      controller: 'VictoriesController'
    }).
    when('/latest', {
      redirectTo: 'latest/1'
    }).
    when('/best', {
      redirectTo: 'best/1'
    }).
    otherwise({
      redirectTo: '/latest/1'
    });
  }
]);

app.config(function($authProvider) {
  $authProvider.configure({
    apiUrl: 'http://localhost:3000/api/v1'
  });
});