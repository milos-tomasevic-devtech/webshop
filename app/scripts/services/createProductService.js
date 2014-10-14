angular.module('webshop')
    .factory('ProductFactory', function($resource, productService) {
        var factoryObject = {};

        factoryObject.createProduct = function(id) {
            var product;

            productService.get({'id': id}, function(product) {
                console.log(JSON.stringify(product));
            });
            //if(type === "book") {
            //    product = new Book();
            //}
            //else if(type === "clothes") {
            //    product = new Clothes();
            //}
            //
            //product.type = type;
            //
            return product;
        };
            return factoryObject;
        //var Product = function() {
        //
        //};
        //
        //Product.prototype = {};
        //Product.prototype.constructor = Product;
        //Product.prototype.getTemplate = function() {
        //    return '/views/partial/product_templates/' + this.type + '/template.html';
        //};
        //
        //var Clothes = function() {};
        //Clothes.prototype = new Product();
        //Clothes.prototype.constructor = Clothes;
        //
        //var Book = function() {};
        //Book.prototype = new Product();
        //Book.prototype.constructor = Book;
    });