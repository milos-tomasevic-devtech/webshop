angular.module('webshop')
    .controller('MainController', function($scope, $cookieStore){

        // initialize
        $scope.cart = {};
        $scope.cart.incart = $cookieStore.get('incart') || 0;
        $scope.productsInCart = $cookieStore.get('productsInCart') || [];
        $scope.cart.items = $cookieStore.get('items') || [];
        $scope.cart_total = $cookieStore.get('cartTotal') || 0;


    });