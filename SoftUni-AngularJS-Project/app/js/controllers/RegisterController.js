'use strict';

app.controller('RegisterController', ['$scope', '$rootScope', '$location', 'townsService', 'userService', 'notifyService',
    function ($scope, $rootScope, $location, townsService, userService, notifyService) {
        $rootScope.pageTitle = 'Register';
        $scope.user = {townId: null};

        townsService.getTowns()
        	.$promise
        	.then(function(data) {
        		$scope.towns = data;
        	});

        $scope.register = function(user) {
            userService.register(user)
                .$promise
                .then(function(data) {
                    notifyService.showInfo('Registration successful');
                    $location.path("/");
                }, function(data) {
                    notifyService.showError("Registration unsuccessful", data);
                    $location.path("/register");
                });
        };
    }
]);
