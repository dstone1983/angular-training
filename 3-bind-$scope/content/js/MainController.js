function MainController($scope) {
	$scope.name = 'Dustin';
}

angular
	.module('app')
	.controller('MainController', MainController);