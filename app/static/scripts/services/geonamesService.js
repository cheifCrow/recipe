(function() {
    'use strict'
    angular.module('recipe')
    .factory('geonamesService', function($http) {
        var geonamesHost = 'http://api.geonames.org'
        var geonamesUser = 'bacsdrobertson'
        var apiCall = function(target, params) {
            params.username = geonamesUser;
            return $http({
                method: 'POST',
                url: geonamesHost + '/' + target,
                params: params
            })
        }

        return {
            nearbyWiki: function(lat, lng) {
                if (lat <= 90 && lat >= -90 && lng >= -180 && lng <= 180) {
                    return apiCall('findNearbyWikipediaJSON', {lat: lat, lng: lng});
                }                
            }
        }
    })
})();