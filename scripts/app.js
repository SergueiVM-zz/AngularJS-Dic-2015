var app = angular.module("MovieDbApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {

    $routeProvider.when("/movies", {
        templateUrl: "views/Movies.html"
    }).when("/series", {
        templateUrl: "views/Series.html"
    }).when("/people", {
        templateUrl: "views/People.html"
    }).otherwise({
        templateUrl: "views/404.html"
    });

}]);
