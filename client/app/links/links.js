angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  
  $scope.data = {};

  $scope.links = function() {
    Links.getAll();
  };

  $scope.init = function () {
    Links.getAll(function(res){
      $scope.data.links = res;
      return res;
    });
  };
  $scope.init();
});
