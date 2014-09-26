angular.module('webshop')
    .controller('NewestItemsController', function($scope, productService){

        $scope.$on('$viewContentLoaded', plugins());

        productService.query(function(data) {
            $scope.newestitems = data;
        });

        $scope.addItem = function (id, name, price) {
            $scope.productsInCart.push({id: id, name: name, price: price, quantity: 1});
        }
    });