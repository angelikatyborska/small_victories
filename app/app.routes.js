'use strict';

var app = angular.module('smallVictories');

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/partials/homepage.html',
        controller: 'HomepageController'
      })
      .when('/latest/:page', {
        templateUrl: 'app/partials/victoriesTable.html',
        controller: 'VictoriesTableController'
      })
      .when('/best/:page', {
        templateUrl: 'app/partials/victoriesTable.html',
        controller: 'VictoriesTableController'
      })
      .when('/latest', {
        redirectTo: 'latest/1'
      })
      .when('/best', {
        redirectTo: 'best/1'
      })
      .when('/add', {
        templateUrl: 'app/partials/victoryForm.html',
        controller: 'VictoryController'
      })
      .when('/sign_in', {
        templateUrl: 'app/partials/loginForm.html',
        controller: 'SessionsController'
      })
      .when('/victory/:id', {
        templateUrl: 'app/partials/victory.html',
        controller: 'VictoryController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
