'use strict';

module.exports = function($scope, Vote, Victory) {
  var hasUpvoted = false;
  var hasDownvoted = false;

  var getVote = function(victory) {
    if ($scope.currentUser && $scope.currentUser.votes) {
      return $scope.currentUser.votes.find(function (element) {
        return (element.victory_id === victory.id)
      });
    }

    return null;
  };

  var hasVoted = function(victory, value) {
    var vote = getVote(victory);

    return vote && vote.value === value;
  };

  $scope.hasUpvoted = function(victory) {
    return (hasUpvoted || hasVoted(victory, 1));
  };

  $scope.hasDownvoted = function(victory) {
    return (hasDownvoted || hasVoted(victory, -1));
  };

  var vote = function(victory, value) {
    if ($scope.currentUser) {
      var vote = getVote(victory);

      if (vote) {
        if (vote.value !== value) {
          var old_value = vote.value;

          Vote.update( { vote: { id: vote.id, value: value, user_id: $scope.currentUser.id, victory_id: victory.id } },
            function () {
              victory.votes_count += (value - old_value);
              vote.value = value;
            });
        }
      }
      else {
        Vote.save( {vote: { value: value, user_id: $scope.currentUser.id, victory_id: victory.id } },
          function (vote) {
            victory.votes_count += value;
            $scope.currentUser.votes.push({ value: vote.value, id: vote.id, victory_id: victory.id });
          });
      }
    }
    else {
      // TODO: handle getting users to know they need to sign in
      console.log('cant vote when not signed in');
    }
  };

  $scope.upvote = function(victory) {
    vote(victory, 1);
  };

  $scope.downvote = function(victory) {
    vote(victory, -1);
  };
};