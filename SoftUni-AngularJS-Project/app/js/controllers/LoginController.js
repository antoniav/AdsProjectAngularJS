'use strict';

app.controller('LoginController',['$scope', '$rootScope', '$location', 'userService', 'notifyService', 
	function($scope, $rootScope, $location, userService, notifyService) {
		$rootScope.pageTitle = 'Login';
		$scope.login = function(user) {
			userService.login(user)
				.$promise
				.then(function(data) {
                    notifyService.showInfo("Login successful");
					$location.path('/');
				}, function(data) {
                	notifyService.showError("Invalid login", data);
                	$location.path("/login");
				});
		};
	}
]);