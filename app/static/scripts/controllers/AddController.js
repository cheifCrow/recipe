(function() {
	'use strict';
	angular.module('recipe')
	.controller('AddController', function($scope) {
		var sizes = ['ft', 'in', 'mm', 'cm', 'm', 'yd'];
		var weights = ['lb', 'oz', 'mg', 'g', 'kg'];
		var volumes = ['tsp', 'tbsp', 'c', 'qt', 'ml', 'l', 'pt', 'gal'];
		
		var vm = this;
		vm.unitTypes = ['Size', 'Weight', 'Volume'];
		vm.units = null;

		$scope.recipe = {
			ingredients: [],
			instructions: []
		};

		vm.submit = function() {

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
			}
		}

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