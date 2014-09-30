angular.module('webshop')
    .controller('ShoppingCartController', function($scope, $cookieStore){

        $scope.removeAll = function() {

                $scope.cart.incart =  0;
                $scope.cart.cart_total = 0;
                $scope.cart.productsInCart =  [];
                $scope.cart.items =  [];

                console.log('Scope: ' + $scope.cart.incart);

                $cookieStore.remove('items');
                $cookieStore.remove('incart');
                $cookieStore.remove('productsInCart');
                $cookieStore.remove('cartTotal');

        };

    });