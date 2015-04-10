var productsModule = angular.module('productsModule', []);

productsModule.factory('productService', ['$location', '$http', '$q', function ($location, $http, $q) {
    
    var service = {};
    
     service.getProduct = function (productId) {
      
      var deferred = $q.defer();
      
      var productsPromise = $http({
         method: 'GET',
         url: 'https://glacial-scrubland-4137.herokuapp.com/api/products/' + productId
      });
      
      productsPromise.success(function(data, status, headers, config) {
         deferred.resolve(data); 
      });
      
      productsPromise.error(function(data, status, headers, config) {
          deferred.reject(status);
      });
      
      return productsPromise;
    };
    
    service.getProducts = function () {
      
      var deferred = $q.defer();
      
      var productsPromise = $http({
         method: 'GET',
         url: 'https://glacial-scrubland-4137.herokuapp.com/api/products'
      });
      
      productsPromise.success(function(data, status, headers, config) {
         deferred.resolve(data); 
      });
      
      productsPromise.error(function(data, status, headers, config) {
          deferred.reject(status);
      });
      
      return productsPromise;
    };
    
    service.createProduct = function(product) {
      
      var deferred = $q.defer();
      
      var productsPromise = $http.post('https://glacial-scrubland-4137.herokuapp.com/api/products', product);
  
      productsPromise.success(function(data, status, headers, config) {
        deferred.resolve(data); 
      });
      productsPromise.error(function(data, status, headers, config) {
         deferred.reject(status);
      });
      
      return productsPromise;
        
    }
    
    service.updateProduct = function(product) {
      
      var deferred = $q.defer();
      
      var productsPromise = $http.put('https://glacial-scrubland-4137.herokuapp.com/api/products/' + product._id, product);
  
      productsPromise.success(function(data, status, headers, config) {
        deferred.resolve(data); 
      });
      productsPromise.error(function(data, status, headers, config) {
         deferred.reject(status);
      });
      
      return productsPromise;
        
    }
    
    //See if this will work.
    service.deleteProduct = function(product) {
      
      var deferred = $q.defer();
      
      var productsPromise = $http.delete('https://glacial-scrubland-4137.herokuapp.com/api/products/' + product._id);
  
      productsPromise.success(function(data, status, headers, config) {
        deferred.resolve(data); 
      });
      productsPromise.error(function(data, status, headers, config) {
         deferred.reject(status);
      });
      
      return productsPromise;
        
    }
    
    return service;
    
}]);
