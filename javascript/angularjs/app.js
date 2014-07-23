(function(){
	var app = angular.module( 'jsApp', ['ngRoute'] );

	var navBarItems = [
		{
			name: 'Home',
			navID: 1
		},
		{
			name: 'Projects',
			navID: 2
		},
		{
			name: 'About',
			navID: 3
		},
		{
			name: 'Contact',
			navID: 4
		}
	];

	app.controller( 'navBarController', function(){
		this.Items = navBarItems;
	});

	app.directive( 'contentHome', function(){
		return{
			restrict: 'E',
			templateUrl: './tab-content/content-home.html'
		};
	});
})();