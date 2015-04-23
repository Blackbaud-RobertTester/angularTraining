'use strict';

describe('myApp.view1 module', function() {
  var scope, controller, location;
  var mockProducts = {data: ['prod1','prod2','prod3']};
  
  beforeEach(
    angular.mock.module('myApp.products')
  );

  beforeEach(inject(function($rootScope, $controller, $location) {
    scope = $rootScope.$new();
    controller = $controller;
    location = $location;
  }));

  it('should be defined', function() {
    //spec body
    var view1Ctrl = controller('ProductsCtrl',{'$scope': scope, 'products': mockProducts, '$location': location});
    expect(view1Ctrl).toBeDefined();
  });

  it('should change locations', function() {
    var view1Ctrl = controller('ProductsCtrl',{'$scope': scope, 'products': mockProducts, '$location': location});
    scope.createProduct();
    expect(location.path()).toBe('/product');
  });
  
  it('should set products in scope', function() {
    var view1Ctrl = controller('ProductsCtrl',{'$scope': scope, 'products': mockProducts, '$location': location});
    expect(scope.products).toBe(mockProducts.data);
  });
});