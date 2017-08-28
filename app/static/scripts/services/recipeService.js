(function() {
	'use strict';
	angular.module('recipe')
	.factory('recipeService', function(){
		//Stand in service, would be replaced by ajax service
		var types = ['entree', 'desert', 'apetizer', 'breakfast', 'lunch', 'snack', 'other']

		var recipes = [
		{
			title: 'Hamburgers',
			type: 'entree',
			img: 'http://s3.amazonaws.com/kidzworld_photo/images/2016527/732e7f07-6752-4950-b9fa-da926401cad5/mcdonalds-cheeseburger.jpg',
			ingredients: [
				{type: 'meat', quantity: '1lb'},
				{type: 'cheese', quantity: '1 cup'},
				{type: 'egg', quantity: '1'}],
			instructions: [
				{step: 'Mix meat'},
				{step: 'Add egg'},
				{step: 'Place cheese on burger while cooking'}]
		},
		{
			title: 'Jello',
			type: 'desert',
			img: 'http://www.dreamalittlebigger.com/wp-content/uploads/2013/12/1-jello-mold-dreamalittlebigger.jpg',
			ingredients: [
				{type: 'sugar', quantity: '1 cup'},
				{type: 'water', quantity: '3 cups'},
				{type: 'gelatin', quantity: 'some'}],
			instructions: [
				{step: 'Mix together'},
				{step: 'Freeze overnight'}]
		}];

		return {
			recipes: function() {
				return recipes;
			},
			recipe: function(id) {
				if (recipes[id-1]) {
					return recipes[id-1];
				} else {
					return false;
				}
			},
			addRecipe: function(recipe) {
				if (recipe.ingredients.length && recipe.instructions.length) {
					recipes.push(recipe);
					return true;
				} else {
					return false;
				}
			},
			getTypes: function() {
				return types;
			}
		};
	});
})();