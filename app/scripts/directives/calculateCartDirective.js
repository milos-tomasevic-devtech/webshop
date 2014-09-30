angular.module('webshop')
    .directive('calculateCart', function($cookieStore) {
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
                        scope.$watchCollection('cart.productsInCart', function(newValue, oldValue) {
                            if (newValue !== oldValue) {

                                scope.cart.incart = scope.cart.productsInCart.length;
                                scope.cart.items = _.chain(scope.cart.productsInCart)
                                    .groupBy("id")
                                    .map(function(value, key) {
                                        return {
                                            id: key,
                                            name: value[0].name,
                                            image_url: value[0].image,
                                            price: value[0].price,
                                            quantity: (sum(_.pluck(value, 'quantity')))
                                        }
                                    })
                                    .value();
                                scope.cart.cart_total = _(scope.cart.items).reduce(function(m,x) {
                                    return m + Number(x.price);
                                }, 0);



                                $cookieStore.put('items', scope.cart.items);
                                $cookieStore.put('incart', scope.cart.incart);
                                $cookieStore.put('productsInCart', scope.cart.productsInCart);
                                $cookieStore.put('cartTotal', scope.cart.cart_total);

                            }
                        });


                    },
                    post: function(scope, element, attributes, controller, transcludeFn){

                    }
                }
            }

        };
    });