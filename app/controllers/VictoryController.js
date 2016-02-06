'use strict';

module.exports = function($scope, $route, $location, Victory) {
  $scope.victoryForm = {};

  $scope.handleSaveButtonClick = function() {
    Victory.save({ victory: { user_id: $scope.currentUser.id, body: $scope.victoryForm.body } },
      function success(response) {
        $location.path('/latest');
      },
      function error(response) {
        $scope.errors = [];

        response.data.errors.forEach(function(error) {
          for (var attribute in error) {
            if (attribute === 'body') {
              error.body.forEach(function(message) {
                $scope.errors.push('Your victory ' + message + '.' );
              });
            }
          }
        });
      });
  };

  $scope.handleDeleteButtonClick = function(victory) {
    Victory.delete({ id: victory.id },
    function success(response) {
      $location.path('/users/' + $scope.currentUser.nickname);
    },
    function error(response) {
      $scope.errors = ['Couldn\'t delete this victory.'];
    }
    );
  };

  if ($route.current.params.id) {
    $scope.victory = Victory.get({id: $route.current.params.id},
    function success(response) {},
    function error(response) {
      $location.path('/');
    });
  }
};