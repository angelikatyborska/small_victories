'use strict';

module.exports = function($scope, Victory) {
  $scope.victories = Victory.query();
};