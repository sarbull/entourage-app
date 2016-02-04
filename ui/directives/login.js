(function() {
  'use strict';

  angular.module('nejucam.directives')
    .directive('login', function() {
      return {
          restrict: 'E',
          templateUrl: 'views/users/login.html'
      };
    });
})();
