'use strict';

app.controller('RegisterController', ['$scope', '$location', 'townsService', 'userService', 'authService', 'notifyService',
    function ($scope, $location, townsService, userService, authService, notifyService) {
        //$scope.userData = {townId: null};

        townsService.getTowns()
        	.$promise
        	.then(function(data) {
        		$scope.towns = data;
                console.log(data);
        	});

        $scope.register = function(user) {
            userService.register(user);
            //userData.register(user,
            //    function success() {
              //      // TODO: display success message
                    // TODO: redirect to login screen
                //},
                //function error(err) {
                  //  notifyService.showError("User registration failed", err);
                //}
            //);
        };
    }
]);
