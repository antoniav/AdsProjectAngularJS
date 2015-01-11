'use strict';

app.controller('HomeController', ['$scope', '$rootScope', 'authService',
	function($scope, $rootScope, authService) {
		$rootScope.pageTitle = 'Home';
		$scope.isLoggedIn = authService.isLoggedIn();
}]);