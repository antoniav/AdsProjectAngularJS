'use strict';

app.controller('LoginController',['$scope', 'userService', 
	function($scope, userService, authService, notifyService) {
		$scope.login = function(user) {
			userService.login(user);
		}
}]);