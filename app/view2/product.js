'use strict';

var module = angular.module('myApp.product', ['ngRoute', 'productsModule']);

module.config(['$routeProvider', function($routeProvider) {
  
  
  $routeProvider.when('/product', {
    templateUrl: '/app/view2/create_product.html',
    controller: 'ProductCreateCtrl'
  })
  .when('/product/:id', {
    templateUrl: '/app/view2/update_product.html',
    controller: 'ProductEditCtrl',
    resolve: {
        product: ['productService', '$route', function(productService, $route){
            return productService.getProduct($route.current.params.id);
        }]
    }
  });
}]);

module.controller('ProductCreateCtrl', ['$scope', 'productService', '$location',  function($scope, productService, $location) {

  $scope.createProduct = function (product) {
    
    var productsPromise = productService.createProduct(product);
    productsPromise.then(function(payload) {
      $location.path('/products');
    });
  };
  
}]);


module.controller('ProductEditCtrl', ['$scope', 'productService', '$location', 'product',  function($scope, productService, $location, product) {

  $scope.product = product.data;

  $scope.updateProduct = function (product) {
    
    var productsPromise = productService.updateProduct(product);
    productsPromise.then(function(payload) {
      $location.path('/products');
    });
  };
  
}]);