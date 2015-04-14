'use strict';

var module = angular.module('myApp.products', ['ngRoute', 'productsModule'])

module.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

  $routeProvider.when('/products', {}); //Configure the route to get all the products.

  
}]);

//Build a controller for the all products page.