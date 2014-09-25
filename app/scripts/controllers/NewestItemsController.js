angular.module('webshop')
    .controller('NewestItemsController', function($scope, productService){

        $scope.$on('$viewContentLoaded', plugins());

        $scope.items = [];

        productService.query(function(data) {
            $scope.newestitems = data;
        });


        $scope.addItem = function (id, name, price) {

            $scope.items.push({id: id, name: name, price: price});
        }
    });