(function() {
    angular.module('recipe')
    .directive('lightbox', function() {
        return {
            scope: {
                visibility: '=',
                images: '=',
                title: '='
            },
            templateUrl: 'scripts/templates/lightbox.html',
            replace: true,
            link: function(scope, element, attrs) {
                scope.active = 0;

                scope.left = function() {
                    if (!scope.active) {
                        scope.active = scope.images.length - 1;
                    } else {
                        scope.active--;
                    }

                }

                scope.right = function() {
                    if (scope.active == scope.images.length -1 ) {
                        scope.active = 0;
                    } else {
                        scope.active++;
                    }
                }
            }
        };
    })
})();