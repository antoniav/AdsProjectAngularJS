'use strict';

app.controller('HomeController', ['$scope', '$rootScope', 'authService',
	function($scope, $rootScope, authService) {
		$rootScope.pageTitle = 'Home';
		$scope.isLoggedIn = authService.isLoggedIn();
		$scope.isAnonymous = authService.isAnonymous();
		
		$scope.logout = function() {
			localStorage.clear();
            // userService.logout()
              //   .$promise
              //   .then(function(data) {
		            // notifyService.showInfo("Logout successful");
		            // $location.path('/');
              //   });
        };
}]);

