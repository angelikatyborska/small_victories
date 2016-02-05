'use strict';

var app = angular.module('smallVictories');

app.factory('Victory', require('./Victory'))
  .factory('Auth', require('./Auth'))
  .factory('User', require('./User'))
  .factory('Vote', require('./Vote'));

