angular.module('webshop')
    .controller('ShoppingCartController', function($scope, $cookieStore){

            $scope.removeItem = function(id) {
                $scope.cart.items = _.filter($scope.cart.items, function(item) {
                    return item.id !== id;
                });

                $scope.cart.incart -= 1;
                $scope.productsInCart = _.filter($scope.productsInCart, function(item) {
                    return item.id !== id;
                });
                $scope.cart_total = _($scope.cart).reduce(function(m,x) {
                    return m + Number(x.price);
                }, 0);

                $cookieStore.put('items', $scope.cart.items);
                $cookieStore.put('incart', $scope.cart.incart);
                $cookieStore.put('productsInCart', $scope.productsInCart);
                $cookieStore.put('cartTotal', $scope.cart_total);
            };

            $scope.removeAll = function() {
                $scope.cart = {};
                $scope.cart.incart =  0;
                $scope.productsInCart =  [];
                $scope.cart.products =  [];
                $scope.cart_total = 0;

                $cookieStore.remove('items');
                $cookieStore.remove('incart');
                $cookieStore.remove('productsInCart');
                $cookieStore.remove('cartTotal');

            };





    });