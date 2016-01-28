(function() {
  'use strict';

  angular.module('nejucam.directives')
    .directive('helloWorld', function() {
      return {
          restrict: 'E',
          templateUrl: 'views/welcome/index.html'
      };
    });
})();
