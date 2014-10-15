angular.module('webshop')
    .factory('ProductFactory', function($resource, productService) {
        var factoryObject = {};

        factoryObject.createProduct = function(product) {
            console.log("pozvan");
                var productObj;
                var type;

                type = product.type;

                productObj = Product.factory(type);
                console.log("vracam: "  + JSON.stringify(productObj));

                return productObj;

        };
        return factoryObject;


    });