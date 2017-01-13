angular.module("app").controller("mvNavBarLoginCtrl", function($scope) {
   $scope.signin = function(username, password) {
       console.log("Signin function was called...");
   };
});