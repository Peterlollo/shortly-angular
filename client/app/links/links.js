angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  
  $scope.data = {};

  $scope.links = function() {
    Links.getAll();
  };

  $scope.realResults = [];

  $scope.searchFor = function(searchString) {
    

    console.log('searching.......', $scope.searchString);
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

  $scope.addCount = function (i) {
    $scope.data[i].__v++;
  };

  $scope.destroytoken = function () {
    Auth.signout();
  };

  $scope.init();
});
