var app = angular.module("MovieDbApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {

    $routeProvider.when("/movies", {
        controller: "MoviesController",
        templateUrl: "views/Movies.html"
    }).when("/series", {
        controller: "SeriesController",
        templateUrl: "views/Series.html"
    }).when("/people", {
        templateUrl: "views/People.html"
    }).otherwise({
        templateUrl: "views/404.html"
    });

}]);
