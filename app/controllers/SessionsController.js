'use strict';

module.exports = function($scope, $rootScope, $location, Auth, User) {
  $scope.loginForm = {};
  $scope.currentUser = null;
  $scope.errors = [];
  $scope.notifications = [];

  $scope.dismissNotification = function(notification) {
    $scope.notifications.splice(
      $scope.notifications.findIndex(function(element) {
        return element === notification;
      }),
      1
    );
  };

  $scope.setUserAfterAuth = function(user) {
    $scope.currentUser = User.get({ nickname: user.nickname });
  };

  $scope.handleSignInButtonClick = function() {
    Auth.login($scope.loginForm,
      function success() {
        $location.path('/');
      },
      function error(data) {
        if (data.reason === 'unauthorized') {
          $scope.errors = ['Invalid email or password.'];
        }
      });
  };

  $scope.handleSignOutButtonClick = function() {
    Auth.logout();
  };

  $rootScope.$on('auth:login-success', function(ev, user) {
    $scope.setUserAfterAuth(user);
    $scope.notifications = ["Signed in successfully."]
  });

  $rootScope.$on('auth:logout-success', function(ev, user) {
    $scope.currentUser = null;
    $scope.notifications = ["Signed out successfully."]
  });

  $rootScope.$on('auth:validation-success', function(ev, user) {
    $scope.setUserAfterAuth(user);
  });

  $rootScope.$on('auth:validation-error', function(ev, user) {
    console.log('error');
  })
};