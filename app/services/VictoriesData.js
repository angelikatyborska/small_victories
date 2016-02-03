'use strict';

module.exports = function($http, $log) {
  return {
    getVictories: function(successCallback) {
      $http({ method: 'GET', url: 'http://localhost:3000/api/v1/victories' }).
        success(function(data, status, headers, config) {
        successCallback(data.victories);
      }).
        error(function(data, status, headers, config) {
        $log.warn(data, status, headers(), config)
      })
    }
  };
};