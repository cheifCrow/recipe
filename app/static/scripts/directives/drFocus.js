(function() {
	'use strict';
	angular.module('recipe')
	.directive('drFocus', function() {
		var FOCUS_CLASS = "dr-focused";
		return {
			require: 'ngModel',
			link: function(scope, element, attrs, ctrl) {
				ctrl.$focused = false;
				element.bind('focus', function(evt) {
					element.addClass(FOCUS_CLASS);
					scope.$apply(function() {
						ctrl.$focused = true;
					});
				}).bind('blur', function(evt) {
					element.removeClass(FOCUS_CLASS);
					scope.$apply(function() {
						ctrl.$focused = false;
					});
				});
			}
		};
	});
})();