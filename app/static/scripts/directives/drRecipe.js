(function() {
	'use strict';
	angular.module('recipe')
	.directive('drRecipe', function() {
		return {
			require: 'ngModel',
			link: function(scope, element, attrs, c) {
				scope.$watch('recipe', function(recipe) {
					if (recipe.ingredients.length && 
						recipe.instructions.length) {
						c.$setValidity('validRecipe', true);
					} else {
						c.$setValidity('validRecipe', false);
					}
				}, true);
			}
		};
	});
})();