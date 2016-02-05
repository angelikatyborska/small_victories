'use strict';

var app = angular.module('smallVictories');

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: 'latest/1'
      })
      .when('/latest/:page', {
        templateUrl: 'app/partials/victoriesTable.html',
        controller: 'VictoriesController'
      })
      .when('/best/:page', {
        templateUrl: 'app/partials/victoriesTable.html',
        controller: 'VictoriesController'
      })
      .when('/latest', {
        redirectTo: 'latest/1'
      })
      .when('/best', {
        redirectTo: 'best/1'
      })
      .when('/login', {
        templateUrl: 'app/partials/loginForm.html',
        controller: 'SessionsController'
      })
      .otherwise({
        redirectTo: '/latest/1'
      });
  }
]);

app.config(function($authProvider) {
  $authProvider.configure({
    apiUrl: 'http://localhost:3000/api/v1'
  });
});