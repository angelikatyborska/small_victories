'use strict';

module.exports = function($scope, $rootScope, $location, Auth, User) {
  $scope.loginForm = {};
  $scope.currentUser = null;

  $scope.setUserAfterAuth = function(user) {
    $scope.currentUser = User.get({ nickname: user.nickname });
  };

  $scope.handleSignInButtonClick = function() {
    Auth.login($scope.loginForm,
      function success() {
        // TODO: show something to the user
        $location.path("/");
      },
      function error() {
        // TODO: render form with errrors
      });
  };

  $scope.handleSignOutButtonClick = function() {
    Auth.logout();
  };

  $rootScope.$on('auth:login-success', function(ev, user) {
    $scope.setUserAfterAuth(user);
  });

  $rootScope.$on('auth:logout-success', function(ev, user) {
    $scope.currentUser = null;
  });

  $rootScope.$on('auth:validation-success', function(ev, user) {
    $scope.setUserAfterAuth(user);
  });
};