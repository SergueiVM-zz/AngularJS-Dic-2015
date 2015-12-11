var app = angular.module("MovieDbApp", ["ngRoute"]);

app.config(["$routeProvider", "MovieDbApiClientConstants",
    function($routeProvider, MovieDbApiClientConstants) {

    // Configuro MovieDbApiClient
    MovieDbApiClientConstants.apiHost = 'localhost:8000';

    // Defino rutas de aplicación
    $routeProvider.when("/movies", {
        controller: "MoviesController",
        templateUrl: "views/Movies.html"
    }).when("/series", {
        controller: "SeriesController",
        templateUrl: "views/Series.html"
    }).when("/people", {
        controller: "PeopleController",
        templateUrl: "views/People.html"
    }).otherwise({
        templateUrl: "views/404.html"
    });

}]);
