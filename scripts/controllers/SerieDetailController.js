angular.module("MovieDbApp").controller("SerieDetailController",
    ["$scope", "$routeParams", "MovieDbApiClient",
    function($scope, $routeParams, MovieDbApiClient){

        // Inicializamos scope
        $scope.loading = true;
        $scope.item = null;
        $scope.error = null;

        // Recuperar la serie del API
        MovieDbApiClient.getSerie($routeParams.id).then(
            function(response){ // la petición ha ido bien
                $scope.item = response.data;
                $scope.loading = false;
            }, function(response){ // la petición ha ido mal
                $scope.error = "Error while retrieving a serie from API";
                $scope.loading = false;
            }
        );

    }]
);
