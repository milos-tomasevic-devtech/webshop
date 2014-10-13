angular.module('webshop')
        .directive('checkout', function($location, $rootScope) {

        return {
            restrict: 'A',
            replace: true,
            transclude: false,
            compile: function(element, attributes) {

                return {
                    pre: function (scope, element, attributes, controller, transcludeFn) {

                    },
                    post: function (scope, element, attributes, controller, transcludeFn) {
                        $(document).ready(function() {

                            $rootScope.$on("$stateChangeStart", function(e, toState, toParams, fromState, fromParams) {

                                $('a[data-url]').closest('li').removeClass('active');
                                $('a[data-url="' +$location.path() + '"]').closest('li').addClass('active');
                            });

                            $('a[data-url]').closest('li').removeClass('active');
                            $('a[data-url="' +$location.path() + '"]').closest('li').addClass('active');

                        });

                    }
                }
            }
        };

});