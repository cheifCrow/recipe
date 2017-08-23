(function() {
	'use strict';
	angular.module('recipe', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainController',
				controllerAs: 'mainCtrl'
			})
			.when('/recipe/:recipeId', {
				templateUrl: 'views/recipe.html',
				controller: 'RecipeController',
				controllerAs: 'recipeCtrl'
			})
			.when('/about', {
				templateUrl: 'views/About.html'
			})
			.otherwise({
				redirectTo: '/'
			});

			$locationProvider.html5Mode(true);
		}
	]);
})();