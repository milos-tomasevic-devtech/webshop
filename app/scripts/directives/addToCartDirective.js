angular.module('webshop')
    .directive('addToCart', function($cookieStore) {
        return {
            restrict: 'E',
            replace: true,
            transclude: false,
            templateUrl: 'views/addToCart.html',
            compile: function(element, attributes) {


                return {
                    pre: function (scope, element, attributes, controller, transcludeFn) {

                    },
                    post: function (scope, element, attributes, controller, transcludeFn) {
                        $(element).bind('click', function() {

                            $('.open').trigger('mouseover');
                            setTimeout( function() { $('.box').trigger('mouseleave'); }, 2000);
                        });
                    }
                }
            }
        }
});
