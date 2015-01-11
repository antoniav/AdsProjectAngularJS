'use strict';

app.controller('HomeController', ['$scope', '$rootScope', 'adsService', 'filter',
	function($scope, $rootScope, adsService, filter) {
		$rootScope.pageTitle = 'Home';

 	function loadPublicAds(filterParams) {
 		filterParams = filterParams || {};
 		adsService.getPublicAds(filterParams)
 			.$promise
 			.then(function (data) {
 				$scope.adsData = data;
 			}
 			, function(data) {
            	notifyService.showError("Cannot load ads", data);
			});
 	}

 	loadPublicAds();

 	$scope.$on('categoryClicked', function(event, category) {
 		loadPublicAds(filter.getFilterParams());
 	});

 	$scope.$on('townClicked', function(event, town) {
 		loadPublicAds(filter.getFilterParams());
 	});

}]);