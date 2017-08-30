(function() {
    'use strict';
    angular.module('recipe')
    .factory('serverStatsService', function($http) {
        var serverCall = function(destination) {
            return $http({
                method: 'POST',
                url: '/api/v1/' + destination,
            });
        }

        return {
            getStats: function() {
                return serverCall('serverStats');
            }
        }
    })
})();