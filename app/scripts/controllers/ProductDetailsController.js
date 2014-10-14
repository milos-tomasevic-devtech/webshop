angular.module('webshop')
    .controller('ProductDetailsController', function($scope, $stateParams, ProductFactory) {

        var currentId = $stateParams.id;
        $scope.product = ProductFactory.createProduct(currentId);

    });