angular.module("MovieDbApp").controller("PeopleController",
    ["$scope", "$log", "MovieDbApiClient", function($scope, $log, MovieDbApiClient){

        // Inicializamos las variables del scope
        $scope.loading = true;
        $scope.error = null;
        $scope.people = [];

        // Recuperamos el listado de personas
        MovieDbApiClient.getPeople().then(function(response){
            // La petición HTTP ha ido bien (2XX)
            $scope.people = response.data;
            $scope.loading = false;
        }, function(response){
            // La petición HTTP ha ido mal (4XX o 5XX)
            $scope.error("Error while retrieving people");
            $scope.loading = false;
        });

    }]
);
