angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  console.log("FUCK YEAH CONSOLE LOGS!: ");
  $scope.data = Links.getAll();

});
