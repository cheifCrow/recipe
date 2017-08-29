(function() {
	'use strict';
	angular.module('recipe')
	.controller('MainController', function($scope) {
		var vm = this;

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