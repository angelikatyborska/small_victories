'use strict';

module.exports = function($scope, $location, Victory) {
  $scope.victoryForm = {};

  $scope.handleSaveButtonClick = function() {
    Victory.save({ victory: { user_id: $scope.currentUser.id, body: $scope.victoryForm.body } },
    function success() {
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
  }
};