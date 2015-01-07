'use strict';

app.controller('RegisterController', ['$scope', '$location', 'townsService', 'authService', 'notifyService',
    function ($scope, $location, townsService, authService, notifyService) {
        $scope.userData = {townId: null};

        townsService.getTowns()
        	.$promise
        	.then(function(data) {
        		$scope.towns = data;
        	});

        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    // TODO: display success message
                    // TODO: redirect to login screen
                },
                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            );
        };
    }
]);
