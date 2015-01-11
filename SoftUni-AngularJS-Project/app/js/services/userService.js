app.factory('userService', ['$resource', 'baseServiceUrl', 'authService', 
	function($resource, baseServiceUrl, authService) {

		function registerUser(user) {
			var resource = $resource(baseServiceUrl + 'user/register')
				.save(user);
			resource.$promise
				.then(function (data){
					authService.saveUser(data);
				});
			return resource;
				

		}

		function loginUser(user) {
			var resource = $resource(baseServiceUrl + 'user/login')
				.save(user);
			resource.$promise
				.then(function (data){
					authService.saveUser(data);
				});

			return resource;
				
		}

		// function logoutUser(user) {
		// 	var resource = $resource(baseServiceUrl + 'user/logout')
		// 		.save(user);
		// 	resource.$promise
		// 		.then(function (data){
		// 			authService.removeUser();
		// 		});
		// 	return resource;
				

		// }

		return {
			register: registerUser,
			login: loginUser //,
			// logout: logoutUser
		}
 }])