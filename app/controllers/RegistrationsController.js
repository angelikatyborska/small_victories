'use strict';

module.exports = function($scope, $rootScope, $location, Auth) {
  $scope.registerForm = {};
  $scope.errors = [];
  $scope.notifications = [];

  $scope.handleSignUpButtonClick = function() {
    Auth.register($scope.registerForm,
    function success(response) {
      Auth.validate();
      $location.path('/');
    },
    function error(response) {
      $scope.errors = response.data.errors.full_messages;
    });
  };
};