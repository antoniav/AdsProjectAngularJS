'use strict';

app.controller('LoginController',['$scope', '$location', 'userService', 'notifyService', 
	function($scope, $location, userService, notifyService) {
		$scope.pageTitle = 'Login';
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

		//$scope.login = function(user) {
        //    userService.login(user,
       //         function success(data) {
        //            $location.path("/");
        //        },
        //        function error(err) {
        //        	notifyService.showError("Invalid login", err);
        //        	$location.path("/login");
        //        }
        //    );
