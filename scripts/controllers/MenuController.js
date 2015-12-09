angular.module("MovieDbApp").controller("MenuController", ["$scope", function($scope){

    $scope.activeItem = '';

    // actualiza el valor activeItem del scope
    $scope.setActiveItem = function(activeItemId) {
        this.activeItem = activeItemId;
    };

    // devuelve la clase CSS a utilizar en función del itemId
    $scope.classForItem = function(itemId) {
        if (itemId == this.activeItem) {
            return 'active';
        } else {
            return '';
        }
    };

}]);
