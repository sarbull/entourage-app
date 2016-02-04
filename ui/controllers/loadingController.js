(function() {
  'use strict';

  angular.module('nejucam.controllers')
    .controller('LoadingController', ['$scope', 'loadingService', function($scope, loadingService) {
      $scope.show = loadingService.show;

      $scope.$watch(function(){
          return loadingService.show;
      }, function (newValue) {
          $scope.show = newValue;
      });
    }]);
})();
