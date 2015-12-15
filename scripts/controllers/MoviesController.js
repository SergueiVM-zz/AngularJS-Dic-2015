angular.module("MovieDbApp").controller("MoviesController",
    ["$scope", "MovieDbApiClient", "$log", "$location", "PubSub",
    function($scope, MovieDbApiClient, $log, $location, PubSub){

    // Inicialización del scope
    $scope.loading = false;
    $scope.error = null;
    $scope.movies = [];

    // Recuperamos del servidor el listado de películas
    $scope.loading = true;
    $scope.error = null;
    MovieDbApiClient.getMovies().then(
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

    // Métodos
    $scope.movieSelected = function(movie) {
        // $location.url("/movies/" + movie.id);
        PubSub.publish("addFavouriteMovie", movie);
    };

}]);
