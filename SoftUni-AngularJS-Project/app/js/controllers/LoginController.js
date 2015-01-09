'use strict';

app.controller('LoginController',['$scope', '$location', 'userService', 
	function($scope, $location, userService) {
		$scope.pageTitle = 'Login';
		$scope.login = function(user) {
			userService.login(user)
				.$promise
				.then(function(data) {
					$location.path('/');
				});
		}
}]);