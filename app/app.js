'use strict'

angular.module('webshop', ['ngRoute', 'ngResource', 'ngCookies',  'truncate']);

angular.module('webshop').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'views/default.html'})
        .when('/cart', { templateUrl: 'views/partial/shoppingCart.html'})
        .when('/checkout', { templateUrl: 'views/partial/checkout_1.html'})
        .when('/checkout-delivery', { templateUrl: 'views/partial/delivery_info.html'})
        .otherwise({ redirectTo: '/'});
}]);
