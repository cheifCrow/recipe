(function() {
	'use strict';
	angular.module('recipe')
	.controller('RecipeController', 
		function($scope, $routeParams, recipeService) {
		
		var vm = this;

		vm.id = $routeParams.recipeId;
		vm.recipe = recipeService.recipe(vm.id);
	});
})();