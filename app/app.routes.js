'use strict';

var app = angular.module('smallVictories');

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/homepage.html',
        controller: 'HomepageController',
      })
      .when('/latest/:page', {
        templateUrl: 'partials/victoriesTable.html',
        controller: 'VictoriesTableController'
      })
      .when('/best/:page', {
        templateUrl: 'partials/victoriesTable.html',
        controller: 'VictoriesTableController'
      })
      .when('/latest', {
        redirectTo: 'latest/1'
      })
      .when('/best', {
        redirectTo: 'best/1'
      })
      .when('/add', {
        templateUrl: 'partials/victoryForm.html',
        controller: 'VictoryController'
      })
      .when('/sign_in', {
        templateUrl: 'partials/loginForm.html',
        controller: 'SessionsController'
      })
      .when('/sign_up', {
        templateUrl: 'partials/registerForm.html',
        controller: 'RegistrationsController'
      })
      .when('/victories/:id', {
        templateUrl: 'partials/victory.html',
        controller: 'VictoryController'
      })
      .when('/users/account', {
        templateUrl: 'partials/userAccount.html',
        controller: 'RegistrationsController',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      })
      .when('/users/:nickname/:page', {
        templateUrl: 'partials/user.html',
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

