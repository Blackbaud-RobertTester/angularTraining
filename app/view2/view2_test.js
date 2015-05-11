'use strict';

xdescribe('myApp.view2 module', function() {
  beforeEach(angular.mock.module('myApp.product'));

  var $q;
  var $location;
  var $scope;
  var mockProductsService = {createProduct: function(product){}, updateProduct: function(product){}};
  var $controller;
  var mockProduct = {data: [{_id: "", title:"", description:""}]};

  beforeEach(inject(function(_$rootScope_, _$controller_, _$location_, _$q_){
    $scope = _$rootScope_.$new();
    $controller = _$controller_;
    $location = _$location_;
    $q = _$q_;
  }));
  
  it('should call createProduct and change path', function() {
    var productCreateCtrl = $controller('ProductCreateCtrl', {
      '$scope': $scope,
      'productService': mockProductsService,
      '$location': $location
    });
    
    var createDeferred = $q.defer();
    
    spyOn(mockProductsService, 'createProduct').and.returnValue(createDeferred.promise);
    
    $scope.createProduct(mockProduct);
    createDeferred.resolve(mockProduct);
    
    $scope.$apply();
    
    $scope.createProduct();
    expect($location.path()).toBe('/products');
  });
  
  it('should call createProduct and change path', function() {
    var productEditCtrl = $controller('ProductEditCtrl', {
      '$scope': $scope,
      'productService': mockProductsService,
      '$location': $location,
      'product': mockProduct
    });
    
    var createDeferred = $q.defer();
    
    spyOn(mockProductsService, 'updateProduct').and.returnValue(createDeferred.promise);
    
    $scope.updateProduct(mockProduct);
    createDeferred.resolve(mockProduct);
    
    $scope.$apply();
    
    $scope.updateProduct();
    expect($location.path()).toBe('/products');
    expect(product).toEqual(mockProduct);
  });
  
});