angular.module("MovieDbApp").controller("SeriesController",
    ["$scope", "MovieDbApiClient", "$log", function($scope, MovieDbApiClient, $log){

        // Inicializamos variables del scope
        $scope.series = [];
        $scope.loading = false;
        $scope.error = null;
        $scope.page = "1";
        $scope.orderby = '-rating';

        // Recuperamos el listado de series del API REST
        $scope.loading = true;
        MovieDbApiClient.getSeries().then(function(response){
            // La petición ha ido bien: HTTP 2XX
            $log.log("REQUEST OK", response);
            $scope.series = response.data;
            $scope.loading = false;
        }, function(response){
            // La petición ha ido mal: HTTP 4XX o 5XX
            $log.error("REQUEST KO", response);
            $scope.error = "Error while retrieving series.";
            $scope.loading = false;
        });
    }]
);
