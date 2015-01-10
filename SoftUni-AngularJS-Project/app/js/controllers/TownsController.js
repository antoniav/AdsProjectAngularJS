'use strict';

app.controller('TownsController',['$scope', '$rootScope', 'townsService', 'filter',
    function ($scope, $rootScope, townsService, filter) {
        townsService.getTowns()
        	.$promise
        	.then(function(data) {
        		$scope.towns = data;
        	});

        $scope.townClicked = function townClicked(town) {
        	filter.filterByTown(town);
        	$rootScope.$broadcast('townClicked', town);
        }
    }
]);
