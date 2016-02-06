'use strict';
var app = angular.module('smallVictories');

app.controller(
    'VictoriesController',
    ['$scope', '$route', '$routeParams', '$location', 'Victory', require('./VictoriesController')]
  )
  .controller(
    'SessionsController',
    ['$scope', '$rootScope', '$location', 'Auth', 'User', require('./SessionsController')]
  )
  .controller(
    'VotesController',
    ['$scope', '$location', 'Vote', require('./VotesController')]
  );

