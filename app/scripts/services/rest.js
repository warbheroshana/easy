(function () {
	'use strict';

	/**
	 * @ngdoc service
	 * @name easy.rest
	 * @description
	 * # rest
	 * Service in the easy.
	 */
	angular.module('easyJobSearchApp')
		.service('rest', ['$resource', '$location', function ($resource, $location) {

				var urlBase = $location.protocol() + '://' + $location.host() + ':' + $location.port();
			if ($location.port() === 9000) {
				urlBase = $location.protocol() + '://' + $location.host() + ':8080';
				//urlBase = 'http://10.108.64.119:8070';
			}
			if ($location.absUrl().substring(0, urlBase.length + 11) === urlBase + '/easy') {
				urlBase += '';
			}
			
			// AngularJS will instantiate a singleton by calling "new" on this function
			return {	
				menu: $resource(urlBase + '/menu/:id'),
				sidebar: $resource(urlBase + '/sidebar/:id'),
				jobs: $resource(urlBase + '/jobs/category/:categoryId'),
				category: $resource(urlBase + '/category/:categoryId'),
				subcategory: $resource(urlBase + '/category/:categoryId/subcategory')
            };
		}]);
})();