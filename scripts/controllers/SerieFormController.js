angular.module("MovieDbApp").controller("SerieFormController",
    ["$scope", "MovieDbApiClient", function($scope, MovieDbApiClient){

        // Error and success messages
        $scope.success = null;
        $scope.error = null;

        // Model to save in DB
        $scope.model = {
            title: "",
            overview: "",
            poster_url: "",
            categories: [],
            rating: null,
            date: null
        };

        // Selected categories in UI
        $scope.selectedCategories = {};

        // Watching for changes in selectedCategories
        $scope.$watchCollection('selectedCategories', function(newValue, oldValue){
            var categories = [];
            for (var key in newValue) {
                if (newValue[key] == true)
                    categories.push(key);
            }
            $scope.model.categories = categories;
        });

        // Available categories
        $scope.categories = ["Drama", "Action", "Terror"];

        // Send the new Serie to the API
        $scope.saveSerie = function(){
            MovieDbApiClient.saveSerie($scope.model).then(
                function(response) { // se ha guardado bien
                    $scope.success = "Serie guardado con éxito!";
                    $scope.model = {
                        title: "",
                        overview: "",
                        poster_url: "",
                        categories: [],
                        rating: null,
                        date: null
                    };
                    $scope.selectedCategories = {};
                    var fields = ["title", "overview", "poster_url", "date", "rating"];
                    for (var i in fields) {
                        var field = fields[i];
                        $scope.serieForm[field].$setUntouched();
                    }
                }, function(response) { // no se ha guardado
                    $scope.error = "Error al guardar la serie";
                }
            );
        };

    }]
);
