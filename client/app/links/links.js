angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  
  $scope.data = {};

  $scope.links = function() {
    Links.getAll();
  };
  
  $scope.sortBy = function(collection, iterator) {
    if (typeof iterator === 'string') {
      return collection.sort(function(a, b) {
        return a[iterator] > b[iterator];
      });
    } else {
      return collection.sort(iterator).sort();
    }
};

  $scope.realResults = [];

  $scope.searchFor = function(searchString) {
    var results;

    Links.getAll(function(res){
      results = res;
      results.forEach(function(link) {
        if(link.url.toLowerCase().indexOf($scope.searchString) !== -1) {
          $scope.realResults.push(link);

        }
      });
    });
    $scope.realResults = [];
  };

  $scope.init = function () {
    Links.getAll(function(res){
      $scope.data.links = res;
      return res;
    });
  };

  $scope.destroytoken = function () {
    Auth.signout();
  };

  $scope.init();
});

var sortBy = function(collection, iterator) {
    if (typeof iterator === 'string') {
      return collection.sort(function(a, b) {
        return a[iterator] > b[iterator];
      });
    } else {
      return collection.sort(iterator).sort();
    }
};
