'use strict';

module.exports = function($scope, $route, $routeParams, $location, Victory) {
  var setSort = function() {
    if ($location.path().match(/latest/) !== null) {
      $scope.sort = '-created_at';
      $scope.header = "Latest Victories";
    }
    else if ($location.path().match(/best/) !== null) {
      $scope.sort = '-rating';
      $scope.header = "Best Victories";
    }
    else {
      $scope.sort = '-created_at';
    }
  };

  var setPagination = function() {
    var pagesInPagination = 5;

    $scope.pagination = [];
    var from = 1;
    var to = 1;

    if ($scope.currentPage <= Math.floor(pagesInPagination / 2)) {
      from = 1;
      to = pagesInPagination;
    }
    else if ($scope.currentPage > ($scope.lastPage - Math.floor(pagesInPagination / 2) )) {
      from = $scope.lastPage - pagesInPagination + 1;
      to = $scope.lastPage;
    }
    else {
      from = $scope.currentPage - 2;
      to = $scope.currentPage + 2;
    }

    $scope.pagination = [];

    for (var i = from; i <= to; i++) {
      if (i >= 1 && i <= $scope.lastPage) {
        $scope.pagination.push(i);
      }
    }
  };

  var setLastPage = function(headersGetter) {
    var headers = headersGetter();
    var totalCount = headers['x-total-count'];
    $scope.lastPage = Math.ceil(totalCount / $scope.perPage);
  };

  var redirectToValidPage = function() {
    if ($scope.currentPage < 1) {
      $scope.setPage(1);
    }
    else if ($scope.currentPage > $scope.lastPage) {
      $scope.setPage($scope.lastPage);
    }
  };

  $scope.setPage = function(n) {
    $route.updateParams({ page: n });
  };

  $scope.reloadVictory = function(victory) {
    var index = $scope.victories.findIndex(function(element) { return element.id === victory.id; });

    console.log($scope.victories);
    console.log('id ' + victory.id);
    console.log('index ' + index);
    $scope.victories[index] = Victory.get({ id: victory.id });
  };


  $scope.getVictories = function() {
    $scope.victories = Victory.query(
      { per_page: $scope.perPage, page: $scope.currentPage, sort: $scope.sort },
      function success(data, headersGetter) {
        setLastPage(headersGetter);
        redirectToValidPage();
        setPagination();
      },
      function error(data) {
        if (data.status === -1) {
          $scope.errors = ['Couldn\'t connect to the server.'];
        }
        else {
          $scope.errors = ['Unknown error.'];
        }
      }
    )
  };

  $scope.perPage = 10;
  $scope.errors = [];
  $scope.currentPage = parseInt($route.current.params.page);

  setSort();
  $scope.getVictories();
};