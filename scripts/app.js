angular.module("MovieDbApp", ["ngRoute"]).config(
    ["$routeProvider", function($routeProvider){

        $routeProvider.when("/movies", {
            templateUrl: "views/Movies.html"
        }).when("/series", {
            templateUrl: "views/Series.html"
        });

    }]
);
