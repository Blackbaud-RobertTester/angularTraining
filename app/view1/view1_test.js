'use strict';

describe('myApp.view1 module', function() {
  
  beforeEach(angular.mock.module('myApp.products'));
  
  var $scope;
  var $controller;
  var $location;
  var products = {data: [{_id: "", title:"", description:""}]};
  
  beforeEach(inject(function(_$rootScope_, _$controller_, _$location_){
    $scope = _$rootScope_.$new();
    $controller = _$controller_;
    $location = _$location_;
  }));
  
  describe('view1 tests', function() {
   
    var controller;

    beforeEach(function() {
      controller = $controller('ProductsCtrl', { '$scope': $scope, 'products': products, '$location': $location});
    });
   
    it('should be defined', function() {
      expect(controller).toBeDefined();
    });
  
    it('should change locations', function() {
      $scope.createProduct();
      expect($location.path()).toBe('/product');
      
    });
    
    it('should set products in scope', function() {
      expect($scope.products).toEqual(products.data)
    });
  });
});