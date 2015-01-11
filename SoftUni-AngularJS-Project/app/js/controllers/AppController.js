'use strict';

app.controller('AppController', function($scope, $location, authService, userService, notifyService) {
	$scope.authService = authService;
	$scope.userService = userService;

	$scope.logout = function() {
            authService.removeUser();
            notifyService.showInfo("Logout successful");
            $location.path('/');
        };
});