function MoviesController() {
	this.favorites = [{
		title: 'The Shawshank Redemption',
		year: '1993'
	}, {
		title: 'Inception',
		year: '2010'
	}, {
		title: 'The Matrix',
		year: '1999'
	}, {
		title: 'Saving Private Ryan',
		year: '1998'
	}];
}

angular
	.module('app')
	.controller('MoviesController', MoviesController);