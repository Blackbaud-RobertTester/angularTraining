'use strict';

var mainModule = angular.module('myApp', ['ngRoute', 'myApp.products', 'myApp.product']);

mainModule.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
  
  $locationProvider.html5Mode(true);
  
  $httpProvider.defaults.useXDomain = true;
  //$httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $httpProvider.defaults.headers.common["Accept"] = "application/json";
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

  //We want to list out all the proudcts initially.  Configure Angular to do that when you first get to the landing page.
  
}]);


