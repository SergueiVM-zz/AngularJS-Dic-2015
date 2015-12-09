angular.module("MovieDbApp").controller("MenuController", ["$scope", function($scope){

    $scope.activeItem = '';

    // actualiza el valor activeItem del scope
    $scope.setActiveItem = function(activeItemId) {
        this.activeItem = activeItemId;
        this.$emit("ChangePageTitle", this.getPageTitle(activeItemId));
    };

    // devuelve la clase CSS a utilizar en función del itemId
    $scope.classForItem = function(itemId) {
        if (itemId == this.activeItem) {
            return 'active';
        } else {
            return '';
        }
    };

    // devuelve el título de página deseado en función del activeItemId pasado
    $scope.getPageTitle = function(activeItemId) {
        switch (activeItemId) {
            case "movies":
                return "Movies list";
            case "series":
                return "Series list";
            case "people":
                return "People list";
        }
    }

}]);
