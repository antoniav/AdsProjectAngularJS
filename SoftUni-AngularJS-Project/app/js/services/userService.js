app.factory('userService', ['$resource', 'baseServiceUrl', 'authService', 
	function($resource, baseServiceUrl, authService) {

		function registerUser(user) {
			return $resource(baseServiceUrl + 'user/register')
				.save(user)
				.$promise
				.then(function (data){
					authService.saveUser(data);
				});

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

		function logoutUser() {
			return $resource(baseServiceUrl + 'user/logout')
				.save(user)
				.$promise
				.then(function (data){
					authService.removeUser();
				});

		}

		return {
			register: registerUser,
			login: loginUser,
			logout: logoutUser
		}
 }])