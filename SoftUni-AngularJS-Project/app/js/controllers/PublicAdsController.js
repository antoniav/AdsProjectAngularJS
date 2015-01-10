app.controller('PublicAdsController', ['$scope', 'adsService', 'filter',
 function($scope, adsService, filter) {

 	function loadPublicAds(filterParams) {
 		filterParams = filterParams || {};
 		adsService.getPublicAds(filterParams)
 			.$promise
 			.then(function (data) {
 				$scope.adsData = data;
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