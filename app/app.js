'use strict'

angular.module('webshop', ['ngRoute', 'ngResource', 'truncate']);

angular.module('webshop').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'views/default.html'})
        .otherwise({ redirectTo: '/'});
}]);