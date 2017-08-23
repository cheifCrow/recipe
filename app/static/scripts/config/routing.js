(function() {
	angular.module('recipe', ['recipe.config'])
	.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainController',
			controllerAs: 'mainCtrl'
		})
		.when('/browse', {
			templateUrl: 'views/browse.html',
			controller: 'BrowseController',
			controllerAs: 'broseCtrl'
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
	});
})();