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
    when('/:sort/:page', {
      templateUrl: 'app/partials/victoriesTable.html',
      controller: 'VictoriesController'
    }).
    when('/:sort', {
      redirectTo: ':sort/1'
    }).
    otherwise({
      redirectTo: '/latest/1'
    });
  }
]);