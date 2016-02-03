'use strict';

module.exports = function($scope, $route, $routeParams, Victory) {
  $scope.victories = Victory.query({ page: $routeParams.page });

  $scope.nextPage = function() {
    $route.updateParams({ page: parseInt($routeParams.page) + 1 });
  };

  $scope.prevPage = function() {
    $route.updateParams({ page: parseInt($routeParams.page) - 1 });
  };
};