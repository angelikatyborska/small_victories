'use strict';
var app = angular.module('smallVictories');

app.controller(
  'VictoriesController',
  ['$scope', '$route', '$routeParams', '$location', 'Victory', require('./VictoriesController')]
);

app.controller(
  'SessionsController',
  ['$scope', '$rootScope', 'Auth', require('./SessionsController')]
);
