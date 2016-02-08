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
      .when('/sign_up', {
        templateUrl: 'app/partials/registerForm.html',
        controller: 'RegistrationsController'
      })
      .when('/victories/:id', {
        templateUrl: 'app/partials/victory.html',
        controller: 'VictoryController'
      })
      .when('/users/:nickname/:page', {
        templateUrl: 'app/partials/user.html',
        controller: 'UserController'
      })
      .when('/users/:nickname', {
        redirectTo: '/users/:nickname/1'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
