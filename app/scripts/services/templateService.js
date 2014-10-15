angular.module('webshop').
    factory('templateService', function() {

        var obj = {};
        obj.getProductTemplateUrl = function(type) {
            return Product.templateUrl(type);
        };

        return obj;

    });