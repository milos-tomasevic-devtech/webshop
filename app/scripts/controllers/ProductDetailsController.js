angular.module('webshop')
    .controller('ProductDetailsController', function($scope, $stateParams, ProductFactory, productService) {

        var currentId = $stateParams.id;
        productService.get({'id': currentId}).$promise.then(function(data) {

            $scope.product = ProductFactory.createProduct(data);
        });

    });

