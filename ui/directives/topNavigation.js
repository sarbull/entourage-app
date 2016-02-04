(function() {
  'use strict';

  angular.module('nejucam.directives')
    .directive('topNavigation', function() {
      return {
          restrict: 'E',
          templateUrl: 'views/topNavigation/index.html'
      };
    });
})();
