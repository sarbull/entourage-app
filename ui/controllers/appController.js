(function() {
  'use strict';

  angular.module('nejucam.controllers')
    .controller('AppController', ['$scope', 'loadingService', '$injector', function($scope, loadingService, $injector) {
      $scope.loggedIn = true;

      $scope.login = function() {
        loadingService.toggle();
        var $http = $injector.get('$http');

        $http.get('http://google.ro').error(function(response) {
          $scope.loggedIn = false;
          loadingService.toggle();
        });
      };

    }]);
})();
