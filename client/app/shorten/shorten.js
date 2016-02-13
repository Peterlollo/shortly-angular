angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  
  $scope.link = {};

  $scope.addLink = function () {
  Links.addOne($scope.link)
  .then(function () {
    $scope.link.url = '';
  }).catch(function(error){
    console.error('Error: Invalid address');
     $scope.link.url = '';
  });
};

  $scope.destroytoken = function () {
    Auth.signout();
  };

  $scope.init = function() {
    if(!Auth.isAuth()) {
      $location.path('/signin');
    }
  };

  $scope.init();
});
