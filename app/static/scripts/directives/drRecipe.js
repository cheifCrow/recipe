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
						console.log('recipe is valid');
						c.$setValidity('validRecipe', true);
					} else {
						console.log('recipe is invalid');
						c.$setValidity('validRecipe', false);
					}
				});
			}
		};
	});
})();