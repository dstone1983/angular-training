function MainController(a) {
	a.name = 'Dustin';
}

MainController.$inject = ['$scope'];

angular
	.module('app')
	.controller('MainController', MainController);