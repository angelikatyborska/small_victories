'use strict';
var app = angular.module('smallVictories');

app.controller(
    'VictoriesTableController',
    ['$scope', '$route', '$routeParams', '$location', 'Victory', require('./VictoriesTableController')]
  )
  .controller(
    'VictoryController',
    ['$scope', '$route', '$location', 'Victory', require('./VictoryController')]
  )
  .controller(
    'SessionsController',
    ['$scope', '$rootScope', '$location', 'Auth', 'User', require('./SessionsController')]
  )
  .controller(
    'VotesController',
    ['$scope', '$location', 'Vote', require('./VotesController')]
  )
  .controller(
    'HomepageController',
    ['$scope', require('./HomepageController')]
  );
