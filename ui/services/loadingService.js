(function() {
  'use strict';

  angular.module('nejucam.services')
    .service('loadingService', function() {
      var self = this;
      self.show = false;

      self.toggle = function() {
        self.show = !self.show;
        console.log(self.show);
      };
    });
})();
