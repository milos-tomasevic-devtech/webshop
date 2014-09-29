angular.module('webshop')
    .directive('addToCart', function($cookieStore) {
        return {
            restrict: 'A',
            replace: false,
            transclude: false,

            compile: function(element, attributes) {
                $('.popbox').popbox();
                return {
                    pre: function(scope, element, attributes, controller, transcludeFn){

                        function sum(numbers) {
                            return _.reduce(numbers, function(result, current) {
                                return result + parseFloat(current);
                            }, 0);
                        }
                        scope.$watchCollection('productsInCart', function(newValue, oldValue) {
                            if (newValue !== oldValue) {

                                scope.cart.incart = scope.productsInCart.length;
                                scope.cart.items = _.chain(scope.productsInCart)
                                    .groupBy("id")
                                    .map(function(value, key) {
                                        return {
                                            id: key,
                                            name: value[0]['name'],
                                            image_url: value[0]['image'],
                                            price: sum(_.pluck(value, 'price')).toFixed(2),
                                            quantity: (sum(_.pluck(value, 'quantity')))
                                        }
                                    })
                                    .value();
                                scope.cart_total = _(scope.cart.items).reduce(function(m,x) {
                                    return m + Number(x.price);
                                }, 0);



                                $cookieStore.put('items', scope.cart.items);
                                $cookieStore.put('incart', scope.cart.incart);
                                $cookieStore.put('productsInCart', scope.productsInCart);
                                $cookieStore.put('cartTotal', scope.cart_total);

                            }
                        });

                        scope.$watchCollection('cart', function(newValue, oldValue) {
                            if (newValue !== oldValue) {
                                $('.open').trigger('mouseover');
                                setTimeout( function() { $('.box').trigger('mouseleave'); }, 2000)
                            }

                        });
                    },
                    post: function(scope, element, attributes, controller, transcludeFn){

                    }
                }
            }

        };
    });