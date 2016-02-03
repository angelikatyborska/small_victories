'use strict';
var app = angular.module('smallVictories');

app.controller('VictoriesController', ['$scope', 'VictoriesData', require('./VictoriesController')]);