(function() {
	angular.module('recipe.config', ['ngRoute'])
	.config(['$locationProvider', function($locationProvider) {
		$locationProvider.html5Mode(true);
	}]);
})();