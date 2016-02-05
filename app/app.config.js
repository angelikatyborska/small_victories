'use strict';

var angular = require('angular');

var app = angular.module('smallVictories');

app.run(function(amMoment) {
  amMoment.changeLocale('en');
});

app.config(function($authProvider) {
  $authProvider.configure({
    apiUrl: 'http://localhost:3000/api/v1'
  });
});