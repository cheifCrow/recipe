(function() {
  'use strict';
  angular.module('recipe')
  .directive('hideError', function() {
    return {
      link: function(scope, element, attrs) {
        element.on('error', function() {
          element.addClass('ng-hide');
        })
      }
    };
  });
})();