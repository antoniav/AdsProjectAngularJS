'use strict';

app.controller('CategoriesController',['$scope', '$rootScope', 'categoriesService', 'filter',
    function ($scope, $rootScope, categoriesService, filter) {
        categoriesService.getCategories()
        	.$promise
        	.then(function(data) {
        		$scope.categories = data;
        	}
            , function(data) {
                    notifyService.showError("Cannot load categories", data);
                    $location.path("/");
                });

        $scope.categoryClicked = function categoryClicked(category) {
            $scope.selectedCategoryId = category.id;
        	filter.filterByCategory(category);
        	$rootScope.$broadcast('categoryClicked', category);
        }
    }
]);