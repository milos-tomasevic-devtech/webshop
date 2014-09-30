angular.module('webshop')
    .controller('MainController', function($scope, $cookieStore){

        // initialize
        $scope.cart = {};
        $scope.cart.incart = Number($cookieStore.get('incart')) || 0;
        $scope.cart.productsInCart = $cookieStore.get('productsInCart') || [];
        $scope.cart.items = $cookieStore.get('items') || [];
        $scope.cart.cart_total = $cookieStore.get('cartTotal') || 0;

        $scope.addItem = function (id, name, price, image_url, quantity) {
            quantity = typeof quantity !== 'undefined' ? quantity : 1;
            $scope.cart.productsInCart.push({id: id, name: name, price: price, quantity: quantity, image: image_url});
        };

        $scope.removeItem = function(id) {
            $scope.cart.items = _.filter($scope.cart.items, function(item) {
                return item.id !== id;
            });

            $scope.cart.incart -= 1;
            $scope.cart.productsInCart = _.filter($scope.cart.productsInCart, function(item) {
                return item.id !== id;
            });
            $scope.cart.cart_total = _($scope.cart.items).reduce(function(m,x) {
                return m + Number(x.price);
            }, 0);

            $cookieStore.put('items', $scope.cart.items);
            $cookieStore.put('incart', $scope.cart.incart);
            $cookieStore.put('productsInCart', $scope.cart.productsInCart);
            $cookieStore.put('cartTotal', $scope.cart_total);
        };

        $scope.updateQuantity = function(id, quantity) {
            var item = _.where($scope.cart.items, {id: id})[0];
            item.quantity = quantity;
            $scope.calculateTotal();
            $cookieStore.put('items', $scope.cart.items);
        };

        $scope.calculateTotal = function() {
            $scope.cart.items =  _.chain($scope.cart.items)
                .map(function(value, key) {
                    return {
                        id: key,
                        name: value.name,
                        image_url: value.image_url,
                        price: value.price,
                        total_price: value.price * value.quantity,
                        quantity: value.quantity
                    }
                })
                .value();
            $scope.cart.cart_total = _($scope.cart.items).reduce(function(m,x) {
                return m + Number(x.total_price);
            }, 0);

            $scope.cart.incart = _($scope.cart.items).reduce(function(m,x) {
                return m + Number(x.quantity);
            }, 0);
            $cookieStore.put('incart', $scope.cart.incart);
        }
    });