(function() {
	'use strict';
	angular.module('recipe')
	.controller('AddController', function($scope, recipeService) {
		var sizes = ['ft', 'in', 'mm', 'cm', 'm', 'yd'];
		var weights = ['lb', 'oz', 'mg', 'g', 'kg'];
		var volumes = ['tsp', 'tbsp', 'c', 'qt', 'ml', 'l', 'pt', 'gal'];
		
		var vm = this;
		vm.unitTypes = ['Size', 'Weight', 'Volume'];
		vm.units = null;
		vm.types = recipeService.getTypes();

		$scope.recipe = {
			title: '',
			type: '',
			img: '',
			ingredients: [],
			instructions: []
		};

		vm.submit = function() {
			$scope.recipe.title = $scope.title;
			console.log($scope.image);
			if ($scope.image.type === 'url') {
				$scope.recipe.img = $scope.image.url;
			}
			vm.result = recipeService.addRecipe($scope.recipe);
		};

		vm.delIngredient = function(index) {
			if ($scope.recipe.ingredients[index]) {
				$scope.recipe.ingredients.splice(index, 1);
			}
		};

		vm.delInstruction = function(index) {
			if ($scope.recipe.instructions[index]) {
				$scope.recipe.instructions.splice(index, 1);
			}
		};

		vm.addIngredient = function() {
			if ($scope.ingredient.name) {
				var ingredient = $scope.ingredient.name;
				var quantity = '';
				if ($scope.ingredient.quantity) {
					quantity += $scope.ingredient.quantity;
					if ($scope.ingredient.unit) {
						quantity += $scope.ingredient.unit;
					}
				}
				console.log('Adding ingredient: ' + ingredient + ' ' + quantity);
				$scope.recipe.ingredients.push({
					type: ingredient,
					quantity: quantity
				});

				$scope.ingredient.name = '';
				$scope.ingredient.quantity = '';
				$scope.ingredient.unitType = '';
			}
		};

		vm.addInstruction = function() {
			if ($scope.instruction) {
				$scope.recipe.instructions.push({
					step: $scope.instruction
				});

				$scope.instruction = '';
			}
		};

		$scope.$watch('ingredient.unitType', function(newVal) {
			if (newVal === 'Size') {
				vm.units = sizes;
			} else if (newVal === 'Weight') {
				vm.units = weights;
			} else if (newVal === 'Volume') {
				vm.units = volumes;
			}
		});

		
	});
})();