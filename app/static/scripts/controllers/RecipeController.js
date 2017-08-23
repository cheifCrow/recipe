(function() {
	'use strict';
	angular.module('recipe')
	.controller('RecipeController', function() {
		var vm = this;

		vm.test = 'recipe test';

		vm.recipe = {
			title: 'Hamburgers',
			img: 'http://s3.amazonaws.com/kidzworld_photo/images/2016527/732e7f07-6752-4950-b9fa-da926401cad5/mcdonalds-cheeseburger.jpg',
			ingredients: [
				{type: 'meat', quantity: '1lb'},
				{type: 'cheese', quantity: '1 cup'},
				{type: 'egg', quantity: '1'}],
			instructions: [
				{step: 'Mix meat'},
				{step: 'Add egg'},
				{step: 'Place cheese on burger while cooking'}]
		};
	});
})();