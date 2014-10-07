angular.module('webshop')
    .directive('validEmail', function() {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl){
                var validator = function(value){
                    if (value == '' || typeof value == 'undefined') {
                        ctrl.$setValidity('validEmail', true);
                    } else {
                        ctrl.$setValidity('validEmail', /your-regexp-here/.test(value));
                    }
                    return value;
                };

                // replace all other validators!
                ctrl.$parsers = [validator];
                ctrl.$formatters = [validator];
            }
        }
    });