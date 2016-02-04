'use strict';

module.exports = function($resource) {
  return $resource('http://localhost:3000/api/v1/victories/:id');
};