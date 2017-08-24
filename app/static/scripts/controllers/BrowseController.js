(function() {
	'use strict';
	angular.module('recipe')
	.controller('BrowseController', function(recipeService) {
		var vm = this;

		vm.entrees = null;
		vm.deserts = null;
		vm.other = null;

		var entrees = [];
		var deserts = [];
		var other = [];

		var addRecipe = function(obj, title, id) {
			obj.push({
				title: title,
				id: id
			});
		};

		var recipes = recipeService.recipes();
		for (var i = 0; i < recipes.length; i++) {
			var recipeType = null;
			
			if (recipes[i].type === 'entree') {
				recipeType = entrees;
			} else if (recipes[i].type == 'desert') {
				recipeType = deserts;
			} else {
				recipeType = other;
			}

			addRecipe(recipeType, recipes[i].title, i+1);
		}

		if (entrees.length) {
			vm.entrees = entrees;
		}

		if (deserts.length) {
			vm.deserts = deserts;
		}

		if (other.length) {
			vm.other = other;
		}
	});
})();