'use strict';

app.factory('townsService', ['$resource', 'baseServiceUrl', 
	function($resource, baseServiceUrl) {
		var townsResource = $resource(baseServiceUrl + 'towns');
		function getAllTowns() {
			return townsResource.query();
		}
		return {
			getTowns: getAllTowns
		};
}]);