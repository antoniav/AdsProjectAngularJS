'use strict';

app.factory('categoriesService', ['$resource', 'baseServiceUrl', 
	function($resource, baseServiceUrl) {
		var categoriesResource = $resource(baseServiceUrl + 'categories');

		function getCategories(){
        	return  categories.query();
   		}
    	return {
        	getCategories: getCategories
    	}
}]);