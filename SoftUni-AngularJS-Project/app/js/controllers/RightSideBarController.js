'use strict';

app.controller('RightSidebarController',['$scope', 'categoriesService', 'townsService',
    function ($scope, categoriesService, townsService) {
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();
    }
]);
