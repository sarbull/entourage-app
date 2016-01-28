(function() {
  'use strict';

  angular.module('nejucam.controllers')
    .controller('MyController', ['$scope', function($scope) {
      $scope.value = 'MyController';
      console.log($scope);

    }]);
})();
