angular.module('webshop')
    .controller('CartItemController', function($scope, $cookieStore) {

        $scope.$watch('product.quantity', function(newValue, oldValue) {
            if (newValue !== oldValue) {
                $scope.updateQuantity($scope.product.id, newValue);
            }
        });
    });