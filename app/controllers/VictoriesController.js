'use strict';

module.exports = function($scope, VictoriesData) {
  VictoriesData.getVictories(function(victories) {
    $scope.victories = victories;
  });
};