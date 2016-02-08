'use strict';

var angular = require('angular');

var app = angular.module('smallVictories');

app.run(function(amMoment) {
  amMoment.changeLocale('en');
});

app.config(function($authProvider) {
  $authProvider.configure({
    apiUrl: 'https://small-victories-api.herokuapp.com/api/v1'
  });
});