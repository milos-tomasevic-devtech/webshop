angular.module('webshop')
    .controller('MainCheckoutController', function($scope) {
        $scope.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;
    });