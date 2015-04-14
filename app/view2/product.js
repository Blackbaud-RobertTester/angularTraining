'use strict';

var module = angular.module('myApp.product', ['ngRoute', 'productsModule']);

module.config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('/product', {})//Configure the route for accessing an individual product.
  .when('/product/:id', {});
}]);

//Create a controller for Creating a product.


//Create a controller for Editing a product.