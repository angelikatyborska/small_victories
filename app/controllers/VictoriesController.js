'use strict';

module.exports = function($scope, $route, $routeParams, $location, Victory) {
  $scope.perPage = 10;

  $scope.setPage = function(n) {
    $route.updateParams({ page: n });
  };

  $scope.setSort = function() {
    console.log($location.path());

    if ($location.path().match(/latest/) !== null) {
      $scope.sort = '-created_at';
    }
    else if ($location.path().match(/best/) !== null) {
      // TODO: change to vote count when it's implemented in the api
      $scope.sort = '+body';
    }
    else {
      $scope.sort = '-created_at';
    }
  };

  $scope.setPagination = function() {
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

  $scope.setLastPage = function(headersGetter) {
    var headers = headersGetter();
    var totalCount = headers['x-total-count'];
    $scope.lastPage = Math.ceil(totalCount / $scope.perPage);
  };

  $scope.redirectToValidPage = function() {
    if ($scope.currentPage < 1) {
      $scope.setPage(1);
    }
    else if ($scope.currentPage > $scope.lastPage) {
      $scope.setPage($scope.lastPage);
    }
  };

  $scope.currentPage = parseInt($route.current.params.page);

  $scope.setSort();

  $scope.victories = Victory.query(
    { per_page: $scope.perPage, page: $scope.currentPage, sort: $scope.sort },
    function(data, headersGetter) {
      $scope.setLastPage(headersGetter);
      $scope.redirectToValidPage();
      $scope.setPagination();
    }
  );
};