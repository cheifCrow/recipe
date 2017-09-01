(function() {
	'use strict';
	angular.module('recipe')
	.controller('MainController', function($http, $scope, $interval, serverStatsService, geonamesService) {
		var vm = this;

		var token;

		$http({
			method: 'POST',
			url: 'login',
			data: {
				username: 'duncan',
				password: 'password'
			}
		})
		.then(function(response) {
			console.log(response.data);
			token = response.data.jwt;
		})
		.catch(function() {
			console.log('error');
		})
		.then(function() {
			return $http({
				method: 'POST',
				url: 'verify',
				headers: {
					'Authorization': 'Bearer ' + token
				}
			});
		})
		.then(function(response) {
			console.log(response.data);
		})
		.catch(function() {
			console.log('verify error');
		});

		var refreshServerStats = function() {
			var p = serverStatsService.getStats();
			p.then(function(response) {
				vm.startTime = response.data.startTime;
				var up = response.data.upTime;
				var hours = Math.floor(up/3600000);
				up = up % 3600000;
				var minutes = Math.floor(up/60000);
				up = up % 60000;
				var seconds = Math.floor(up/1000);
				vm.upTime = {
					hours: hours,
					minutes: minutes,
					seconds: seconds
				};
			})
			.catch(function(err) {
				console.log('Error: ' + err);
			});
		};

		refreshServerStats();
		$interval(refreshServerStats, 60000);

		vm.geonames = function() {
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					vm.loadingGeo = true;
					vm.geoErr = false;
					geonamesService.nearbyWiki(position.coords.latitude, position.coords.longitude)
					.then(function(response) {
						if (response.data.geonames) {
							vm.nearby = response.data.geonames;
						} else {
							vm.geoErr = true;
						}
					})
					.catch(function() {
						console.log('There was a problem connecting to the geonames API');
						vm.geoErr = true;
					})
					.finally(function() {
						vm.loadingGeo = false;
					});
				});
			}
		};

		if (!$scope.lightbox) {
			$scope.lightbox = {
				show: false,
				images: ['https://i.redd.it/09bo9pb35diz.png',
				'http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg', 
				'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
				'https://www.visioncritical.com/wp-content/uploads/2014/12/BLG_Andrew-G.-River-Sample_09.13.12.png',
				'https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg']
			};
		}
	});
})();