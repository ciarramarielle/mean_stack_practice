angular.module("app", ["ngResource", "ngRoute"]);

angular.module("app").config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    // need base href="/" in index to make this work.
    
    $routeProvider
        .when("/", {
            templateUrl: "/partials/main/main",
            controller: "mvMainCtrl"
        })
});
