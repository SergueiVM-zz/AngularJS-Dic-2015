var app = angular.module("MovieDbApp", ["ngRoute"]);

app.config(["$routeProvider", "$httpProvider", "MovieDbApiClientConstants",
    function($routeProvider, $httpProvider, MovieDbApiClientConstants) {

    // Configuro MovieDbApiClient
    MovieDbApiClientConstants.apiHost = 'localhost:8000';

    // Defino rutas de aplicación
    $routeProvider.when("/movies", {
        templateUrl: "views/Movies.html"
    }).when("/movies/:id", {
        controller: "MovieDetailController",
        templateUrl: "views/MediaItem.html"
    }).when("/series", {
        controller: "SeriesController",
        templateUrl: "views/Series.html"
    }).when("/series/new", {
        controller: "SerieFormController",
        templateUrl: "views/SerieForm.html"
    }).when("/series/:id", {
        controller: "SerieDetailController",
        templateUrl: "views/MediaItem.html"
    }).when("/people", {
        controller: "PeopleController",
        templateUrl: "views/People.html"
    }).otherwise({
        templateUrl: "views/404.html"
    });

    // Interceptor HTTP
    $httpProvider.interceptors.push(["$location", function($location) {
        return {
            'response': function(response) {
                console.log("HTTP RESPONSE INTERCEPTOR", response);
                if (response.status == 401) {
                    alert("No estás autorizado");
                    $location.url("http://www.google.com/");
                }
                return response;
            }
        };
    }]);

}]);
