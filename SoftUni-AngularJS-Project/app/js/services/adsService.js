'use strict';

app.factory('adsService', ['$resource', 'baseServiceUrl', 
	function($resource, baseServiceUrl) {
		var adsResource = $resource(
			baseServiceUrl + 'ads:adId', 
			{adId: '@id'}, 
			{
				update: {method: 'PUT'}
			}
		)

		function getPublicAds () {
			return adsResource.get();
		}

		function editAd (adId, ad) {
			return adsResource.update({ id: adId}, ad);
		}

		function getAdById (adId) {
			return adsResource.get({id: adId});
		}

		function addAd (ad) {
			return adsResource.save(ad);
		}

		function deleteAd (adId) {
			return adsResource.delete({id: adId});
		}

		return {
			getPublicAds: getPublicAds,
			edit: editAd,
			getAdById: getAdById,
			add: addAd,
			delete: deleteAd
		}
}]);



