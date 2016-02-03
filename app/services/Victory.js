'use strict';

module.exports = function($resource, $http, $log) {
  return $resource('http://localhost:3000/api/v1/victories/:id');
};