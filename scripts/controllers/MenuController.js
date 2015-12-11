angular.module("MovieDbApp").controller("MenuController",
    ["$scope", "$location", function($scope, $location){

        $scope.activeItem = $location.path();

        // escuchamos cuando cambiar la URL ($locationChangeSuccess)
        $scope.$on("$locationChangeSuccess", function(){
            $scope.setActiveItem($location.path());
        });

        // actualiza el valor activeItem del scope
        $scope.setActiveItem = function(activeItemId) {
            this.activeItem = activeItemId.split("/")[1] || "";
            if (this.activeItem == "") {
                $location.url("/movies");
            } else {
                this.$emit("ChangePageTitle", this.getPageTitle(this.activeItem));
            }
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

    }]
);
