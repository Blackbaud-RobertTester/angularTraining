'use strict';

describe('myApp.view2 module', function() {
  var scope, controller, location, q;
  var mockProductsService = {
    createProduct: function(product){},
    updateProduct: function(product){}
  };
  var mockProduct = {data: ['prod1','prod2','prod3']};;
  

  beforeEach(angular.mock.module('myApp.product'));

  beforeEach(inject(function($rootScope, $controller, $location, $q) {
    scope = $rootScope.$new();
    controller = $controller;
    location = $location;
    q = $q;
  }));

  it('should be defined', function() {
    //spec body
    var productCreateCtrl = controller('ProductCreateCtrl', {
      '$scope': scope,
      'productService': mockProductsService,
      '$location': location
    });
    var productEditCtrl = controller('ProductEditCtrl', {
      '$scope': scope,
      'productService': mockProductsService,
      '$location': location,
      'product': mockProduct
    });
    expect(productCreateCtrl).toBeDefined();
    expect(productEditCtrl).toBeDefined();
  });
  
  it('should call createProduct and change path', inject(function() {
    var productCreateCtrl = controller('ProductCreateCtrl', {
      '$scope': scope,
      'productService': mockProductsService,
      '$location': location
    });
    
    var createDeferred = q.defer();
    
    
    spyOn(mockProductsService, 'createProduct').and.returnValue(createDeferred.promise);
    
    scope.createProduct(mockProduct);
    createDeferred.resolve(mockProduct);
    
    scope.$apply();
    
    
    expect(mockProductsService.createProduct).toHaveBeenCalled();
    
    expect(location.path()).toBe('/products');
  }));
  
  it('should call editProduct and change path', inject(function() {
    var productEditCtrl = controller('ProductEditCtrl', {
      '$scope': scope,
      'productService': mockProductsService,
      '$location': location,
      'product': mockProduct
    });
    
    var editDeferred = q.defer();
    
    spyOn(mockProductsService, 'updateProduct').and.returnValue(editDeferred.promise);
    
    scope.updateProduct(mockProduct);
    editDeferred.resolve(mockProduct);
    
    scope.$apply();
    
    
    expect(scope.product).toBe(mockProduct.data);
    expect(mockProductsService.updateProduct).toHaveBeenCalled();
    expect(location.path()).toBe('/products');
  }));
  
  it('should set product in scope', inject(function() {
    var productEditCtrl = controller('ProductEditCtrl', {
      '$scope': scope,
      'productService': mockProductsService,
      '$location': location,
      'product': mockProduct
    });
    
    expect(scope.product).toBe(mockProduct.data);
  }));
  
  
});