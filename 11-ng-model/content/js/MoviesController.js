function MoviesController() {
	this.favorites = [{
		title: 'The Shawshank Redemption',
		year: '1993',
		popular: true,
		category: 'thriller'
	}, {
		title: 'Inception',
		year: '2010',
		popular: false,
		category: 'fantasy'
	}, {
		title: 'The Matrix',
		year: '1999',
		popular: true,
		category: 'fantasy'
	}, {
		title: 'Saving Private Ryan',
		year: '1998',
		popular: true
	}];
}

angular
	.module('app')
	.controller('MoviesController', MoviesController);