(function() {
  'use strict';

  angular.module('nejucam.directives')
    .directive('loading', function() {
      return {
          restrict: 'E',
          templateUrl: 'views/helpers/loading.html'
      };
    });
})();
