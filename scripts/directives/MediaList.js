angular.module("MovieDbApp").directive("mediaList", function(){
    return {
        restrict: "EA", // permite utilizar la directiva como atributo o elemento
        templateUrl: "views/MediaList.html",
        scope: {
            items: "="
        }
    };
});
