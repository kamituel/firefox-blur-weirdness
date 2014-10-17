var app = angular.module('App', []);

app.controller('MainCtrl', function($scope) {
   $scope.doStuff = function() {
     console.log('Stuff done!');
   };
});

app.directive('dir', function() {
  return {
    restrict: 'E',
    templateUrl: 'dir.html'
  };
});

