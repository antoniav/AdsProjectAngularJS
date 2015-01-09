app.controller('PublicAdsController', ['$scope', 'adsService',
 function($scope, adsService) {
 	adsService.getPublicAds()
 		.$promise
 		.then(function (data) {
 			$scope.ads = data;
 		})
}]);