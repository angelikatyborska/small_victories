'use strict';

module.exports = function($resource) {
  return $resource('http://small-victories-api.herokuapp.com/api/v1/victories/:id');
};