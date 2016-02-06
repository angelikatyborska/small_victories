'use strict';
var app = angular.module('smallVictories');

app.controller(
    'VictoriesTableController',
    ['$scope', '$route', '$routeParams', '$location', 'Victory', require('./VictoriesTableController')]
  )
  .controller(
    'NewVictoryController',
    ['$scope', '$location', 'Victory', require('./NewVictoryController')]
  )
  .controller(
    'SessionsController',
    ['$scope', '$rootScope', '$location', 'Auth', 'User', require('./SessionsController')]
  )
  .controller(
    'VotesController',
    ['$scope', '$location', 'Vote', require('./VotesController')]
  );
