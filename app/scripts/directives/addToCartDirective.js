angular.module('webshop')
    .directive('addToCart', function() {
        return {
            restrict: 'A',
            replace: false,
            transclude: false,

            compile: function(element, attributes) {
                $('.popbox').popbox();
                return {
                    pre: function(scope, element, attributes, controller, transcludeFn){

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