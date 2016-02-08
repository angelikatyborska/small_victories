'use strict';

module.exports = function($scope, $route, Victory) {
  $scope.userNickname = $route.current.params.nickname;
  $scope.header = 'Victories by ' + $route.current.params.nickname;
};