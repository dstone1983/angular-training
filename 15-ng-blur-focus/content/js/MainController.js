function MainController() {
	this.name = 'Dustin';
}

angular
	.module('app')
	.controller('MainController', MainController);