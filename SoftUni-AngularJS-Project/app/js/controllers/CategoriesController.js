'use strict';

app.controller('CategoriesController',['$scope', '$rootScope', 'categoriesService', 'filter',
    function ($scope, $rootScope, categoriesService, filter) {
        categoriesService.getCategories()
        	.$promise
        	.then(function(data) {
        		$scope.categories = data;
        	});

        $scope.categoryClicked = function categoryClicked(category) {
        	filter.filterByCategory(category);
        	$rootScope.$broadcast('categoryClicked', category);
        }
    }
]);