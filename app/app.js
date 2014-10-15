'use strict'

angular.module('webshop', ['ngRoute', 'ngResource', 'ngCookies', 'ui.router', 'truncate']);

angular.module('webshop').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/route1");

    $stateProvider
        .state('route1', {
            url: "/",
            templateUrl: 'views/default.html'
        })
        .state('route2', {
            url: "/cart",
            templateUrl: 'views/partial/shoppingCart.html'
        })
        .state('route3', {
            url: "/checkout",
            templateUrl: 'views/partial/checkout.html'
        })
            .state('route3.login_register', {
                url: "/login_register",
                templateUrl: 'views/partial/checkout_1.html'

            })
            .state('route3.delivery', {
                url: "/delivery",
                templateUrl: 'views/partial/delivery_info.html'

            })

            .state('route3.confirmation', {
                url: "/confirmation",
                templateUrl: 'views/partial/order_confirmation.html'
            })

        .state('productDetails', {
            url: "/product/:id-:type",

            templateProvider: function( templateService, $templateFactory, $stateParams){


                return  $templateFactory.fromUrl(
                            templateService.getProductTemplateUrl($stateParams.type)
                        );

            },

            controller: function($scope, $stateParams, ProductFactory, productService) {
                console.log("pozvan");
                var currentId = $stateParams.id;
                productService.get({'id': currentId}).$promise.then(function(data) {

                    $scope.product = ProductFactory.createProduct(data);
                });
            }
        })
});