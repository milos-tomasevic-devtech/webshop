angular.module('webshop')
    .controller('NewestItemsController', function($scope, productService){

        $scope.$on('$viewContentLoaded', plugins());

        productService.query(function(data) {
            $scope.newestitems = data;
        });

    });