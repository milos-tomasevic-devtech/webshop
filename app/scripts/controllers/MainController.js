angular.module('webshop')
    .controller('MainController', function($scope){

        $scope.productsInCart = [];
        $scope.cart = [];
        $scope.incart = 0;
        function sum(numbers) {
            return _.reduce(numbers, function(result, current) {
                return result + parseFloat(current);
            }, 0);
        }
        $scope.$watchCollection('productsInCart', function(newValue, oldValue) {
            if (newValue !== oldValue) {

                $scope.cart = [];

                $scope.incart = $scope.productsInCart.length;

                $scope.cart = _.chain($scope.productsInCart)

                    .groupBy("id")
                    .map(function(value, key) {
                        return {
                            id: key,
                            name: value[0]['name'],
                            image_url: value[0]['image'],
                            price: sum(_.pluck(value, 'price')).toFixed(2),
                            quantity: (sum(_.pluck(value, 'quantity')))
                        }
                    })
                    .value();
                $scope.cart_total = _($scope.cart).reduce(function(m,x) {
                    return m + Number(x.price);
                }, 0);


            }
        });
    });