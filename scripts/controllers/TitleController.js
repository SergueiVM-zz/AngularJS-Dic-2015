angular.module("MovieDbApp").controller("TitleController", ["$scope", function($scope){

    $scope.title = "";

    $scope.$on("ChangePageTitle", function(event, data){
        $scope.title = data;
    });

}]);
