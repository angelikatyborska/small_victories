'use strict';

module.exports = function($scope, $rootScope, Auth) {
  $scope.loginForm = {};

  $scope.handleSignInLinkClick = function() {
    $scope.showLoginForm = true;
  };

  $scope.handleSignInButtonClick = function() {
    Auth.login($scope.loginForm,
      function success() {
        $scope.showLoginForm = false;
        // TODO: show something to the user
      },
      function error() {
        // TODO: render form with errrors
      });
  };

  $scope.handleSignOutButtonClick = function() {
    Auth.logout(function() {
      $scope.nickname = undefined;
      $scope.showLoginForm = false;
    });
  };

  // TODO: delete this event
  // TODO: think of a better way to store and identify current user
  $rootScope.$on('auth:login-success', function(ev, user) {
    $scope.nickname = user.nickname
  });
};