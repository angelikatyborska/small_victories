'use strict';
var app = angular.module('smallVictories');

app.controller(
  'VictoriesController',
  ['$scope', '$route', '$routeParams', 'Victory', require('./VictoriesController')]
);