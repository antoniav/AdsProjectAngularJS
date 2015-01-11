'use strict';

app.controller('LogoutController',['$scope', '$rootScope', '$location', 'userService', 'notifyService', 
	function($scope, $rootScope, $location, userService, notifyService) {
		$scope.logout = function() {
			userService.login()
				.$promise
				.then(function(data) {
                    notifyService.showInfo("Logout successful");
					$location.path('/');
				}, function(data) {
                	notifyService.showError("Unable to logout", data);
				});
		};
	}
]);