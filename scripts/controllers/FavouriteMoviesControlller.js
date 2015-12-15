angular.module("MovieDbApp").controller("FavouriteMoviesControlller",
    ["$scope", "PubSub", function($scope, PubSub){

        var self = this;
        $scope.movies = [];
        $scope.deleteMovie = function(movie) {
            console.log("DeleteMovie");
            var index = $scope.movies.indexOf(movie);
            if (index >= 0) {
                $scope.movies.pop(index);
                self.persistData();
            }
        };

        PubSub.subscribe("addFavouriteMovie", function(movie){
            var exists = false;
            for (var i in $scope.movies) {
                exists = movie.id == $scope.movies[i].id;
                if (exists)
                    break;
            }
            if (!exists) {
                $scope.movies.push(movie);
                self.persistData();
            }
        });

        this.persistData = function() {
            localStorage.setItem("favouriteMovies", JSON.stringify($scope.movies));
        };

        this.loadData = function() {
            var movies = localStorage.getItem("favouriteMovies");
            if (movies)
                $scope.movies = JSON.parse(movies);
            else
                $scope.movies = [];
        };

        this.loadData();

    }]
);
