angular.module("MovieDbApp").service("MovieDbApiClient",
    ["$http", "$log", "MovieDbApiClientConstants", "MovieDbApiClientValues",
    function($http, $log, MovieDbApiClientConstants, MovieDbApiClientValues){

        this.getURL = function(path) {
            var url = "";
            if (MovieDbApiClientConstants.useHTTPS) {
                url += "https://";
            } else {
                url += "http://";
            }
            if (MovieDbApiClientConstants.apiHost == "") {
                $log.error("MovieDbApiClient", "You didn't set the apiHost constant");
                return "";
            } else {
                url += MovieDbApiClientConstants.apiHost;
            }
            url += MovieDbApiClientConstants.apiURL;
            url += path;
            return url;
        };

        this.getMovies = function(){
            return $http.get(this.getURL("movies/"));
        };

        this.getSeries = function(){
            return $http.get(this.getURL("series/"));
        };

        this.getPeople = function(){
            return $http.get(this.getURL("people/"));
        };

    }]
);
