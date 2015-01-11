'use strict';

app.controller('AppController', function($scope, authService, userService) {
	$scope.authService = authService;
	$scope.userService = userService;
});