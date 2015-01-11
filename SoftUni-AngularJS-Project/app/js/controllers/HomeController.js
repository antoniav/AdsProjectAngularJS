'use strict';

app.controller('HomeController', ['$scope', '$rootScope', 'adsService', 'filter', 'pageSize',
	function($scope, $rootScope, adsService, filter, pageSize) {
		$rootScope.pageTitle = 'Home';

		$scope.adsParams = {
          'startPage' : 1,
          'pageSize' : pageSize
      	};

      	// $scope.reloadAds = function() {
       //    	adsService.getPublicAds(
       //        $scope.adsParams,
       //        function success(data) {
       //            $scope.ads = data;
       //        },
       //        function error(err) {
       //            notifyService.showError("Cannot load ads", err);
       //        }
       //    	);
      	// };

      	// $scope.reloadAds();

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