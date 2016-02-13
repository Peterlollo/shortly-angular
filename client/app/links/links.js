angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
  
  $scope.data = {};

  $scope.links = function() {
    Links.getAll();
  };

  $scope.realResults = [];

  $scope.searchFor = function(searchString) {
    var results;

    Links.getAll(function(res){
      results = res;
      results.forEach(function(link) {
        if(link.url.toLowerCase().indexOf($scope.searchString) !== -1) {
          $scope.realResults.push(link);
          $scope.realResults.sort(function(a,b){ return b.visits - a.visits;});
        }
      });
    });
    $scope.realResults = [];
  };

  $scope.init = function () {
    if(Auth.isAuth()) {
      Links.getAll(function(res){
        $scope.data.links = res;
        return res;
      });
    } else {
      $location.path('/signin');
    }
  };

  $scope.destroytoken = function () {
    Auth.signout();
  };

  $scope.init();
});

