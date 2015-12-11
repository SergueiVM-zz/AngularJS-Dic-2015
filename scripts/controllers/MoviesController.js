angular.module("MovieDbApp").controller("MoviesController",
    ["$scope", "$http", "$log", function($scope, $http, $log){

    // Inicialización del scope
    $scope.loading = false;
    $scope.error = null;
    $scope.movies = [];

    // Recuperamos del servidor el listado de películas
    $scope.loading = true;
    $scope.error = null;
    $http.get("/api/movies/").then(
        function(response){ // la petición ha ido bien
            $scope.movies = response.data;
            $scope.loading = false;
        },
        function(){ // la petición ha ido mal
            $log.error("Error while retrieving movies");
            $scope.error = "Error while retrieving movies";
            $scope.loading = false;
        }
    );

}]);