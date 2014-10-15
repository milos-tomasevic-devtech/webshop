var Product = function() {};

Product.templateUrl = function(type) {
    return 'views/partial/product_templates/' + type + '/template.html';
};
Product.prototype.getTemplate = function() {
    return 'views/partial/product_templates/' + this.template_name + '/template.html';
};
Product.prototype.constructor = Product;

Product.factory = function(type) {
    var constr = type,
        newproduct;

    if(typeof Product[constr] !== "function") {
        throw {
            name: "Error",
            message: constr + " doesn't exist"
        };
    }

    Product[constr].prototype = new Product();
    newproduct = new Product[constr]();

    // copy data into new model object
    //for(var key in product) {
    //    newproduct[key] = product[key];
    //}
    return newproduct;
};

