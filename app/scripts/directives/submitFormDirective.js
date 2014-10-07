angular.module('webshop')
    .directive('submitForm', ['$parse', '$location', function ($parse, $location) {
        return {

            restrict: 'A',
            require: ['submitForm','form'],
            controller: ['$scope', function($scope) {
                this.attempted = false;
                this.setAttempted = function () {
                    this.attempted = true;
                }
            }],
            compile: function(cElement, cAttributes, transclude) {
                return {
                    pre: function(scope, formElement, attributes, controllers) {

                        var submitController = controllers[0];

                        scope.rc = scope.rc || {};
                        scope.rc[attributes.name] = submitController;
                    },
                    post: function(scope, formElement, attributes, controllers) {
                        var routePath = attributes.submitForm;

                        var submitController = controllers[0];
                        var formController = (controllers.length > 1) ?
                            controllers[1] : null;

                        formElement.bind('submit', function (event) {

                            //$('#activate-step-2').on('click', function(e) {
                            //    $('ul.setup-panel li:eq(1)').removeClass('disabled');
                            //    $('ul.setup-panel li a[href="#step-2"]').trigger('click');
                            //    $(this).remove();
                            //});

                            submitController.setAttempted();
                            if (!scope.$$phase) scope.$apply();

                            if (!formController.$valid) return false;

                            scope.$apply(function() {
                                var activeLi = $('ul.setup-panel li.active');
                                var nextLi = activeLi.next();
                                $(activeLi).removeClass('active');
                                console.log('NEXTLI: ' + nextLi)
                                $(nextLi).addClass('active');
                                $location.path(routePath);



                            });
                        });
                    }
                }
            }
        };
}]);

