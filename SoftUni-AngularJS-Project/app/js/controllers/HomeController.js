'use strict';

app.controller('HomeController', function($scope, $rootScope, adsService, notifyService, pageSize) {
	adsService.getAds(
			null,
			function success (data) {
				//TODO: put the ads in the scope
			},
			function error (err) {
				notifyService.showError("Unable to load ads", err);
			}
		);
});