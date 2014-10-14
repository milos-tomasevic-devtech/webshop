angular.module('webshop')
    .factory('productService', ['$resource',
        function ($resource) {
            return $resource("api/products/:id");
        }
    ]);