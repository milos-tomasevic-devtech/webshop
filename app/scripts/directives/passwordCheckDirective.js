angular.module('webshop')
    .directive('passwordMatch', function() {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                var firstPassword = '#' + attrs.passwordMatch;
                $(elem).add(firstPassword).on('keyup', function () {
                    scope.$apply(function () {
                        if(elem.val() !== '' && $(firstPassword).val() !== '') {

                                console.log("izvrsavam aa");
                                var v = $(elem).val()===$(firstPassword).val();
                                ctrl.$setValidity('pwmatch', v);


                        }

                    });
                });
            }
        }
    })