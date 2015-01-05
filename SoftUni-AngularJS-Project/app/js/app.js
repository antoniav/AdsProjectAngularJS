var softUniApp = angular.module('SoftUniModule', ['ngRoute']) 
.config(function($routeProvider){
	$routeProvider.when('/register', {
		templateUrl: 'templates/register.html'
	})
});