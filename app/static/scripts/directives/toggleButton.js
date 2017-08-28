(function() {
  'use strict';
  angular.module('recipe')
  .directive('toggleButton', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, c) {
        element.on('click', function() {
          if (c.$viewValue) {
            c.$setViewValue(false);
          } else {
            c.$setViewValue(true);
          }
        });
      }
    };
  })
})();