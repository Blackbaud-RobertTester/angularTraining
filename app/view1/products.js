'use strict';

var module = angular.module('myApp.products', ['ngRoute', 'productsModule'])

module.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

  $routeProvider.when('/products', {
    templateUrl: '/app/view1/products.html',
    controller: 'ProductsCtrl',
    resolve: {
        products: ["productService", function(productService){
            return productService.getProducts()
        }]
    }
  });

  
}]);

module.controller('ProductsCtrl', ['$scope', 'products', '$location', function($scope, products, $location) {
  
  $scope.products = products.data;
  
  $scope.createProduct = function () {
     $location.path('/product');
  }

}]);