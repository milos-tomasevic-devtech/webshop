angular.module('webshop')
    .controller('NewestItemsController', function($scope, productService){

        productService.query(function(data) {
            $scope.newestitems = data;
        });
    });