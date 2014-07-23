(function(){

	// creating the angular application module
	var app = angular.module( 'jsApp', ['ngRoute'] );

	// the tabs of the navigation bar
	var navigationItems = [
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


	/**************************************************************
	*
	*						controllers
	*
	**************************************************************/
	/**************************************************************
	*	nav bar controller
	**************************************************************/
	app.controller( 'navBarController', function(){
		this.Items = navigationItems;
	});


	/**************************************************************
	*
	*						custom directives
	*
	**************************************************************/
	/**************************************************************
	*	allow Home tab content to be included as html element
	**************************************************************/
	app.directive( 'contentHome', function(){
		return{
			restrict: 'E',
			templateUrl: './tab-content/content-home.cfm'
		};
	});

	/**************************************************************
	*	allow Projects tab content to be included as html element
	**************************************************************/
	app.directive( 'contentProjects', function(){
		return{
			restrict: 'E',
			templateUrl: './tab-content/content-projects.cfm'
		};
	});

	/**************************************************************
	*	allow About tab content to be included as html element
	**************************************************************/
	app.directive( 'contentAbout', function(){
		return{
			restrict: 'E',
			templateUrl: './tab-content/content-about.cfm'
		};
	});

	/**************************************************************
	*	allow Contact tab content to be included as html element
	**************************************************************/
	app.directive( 'contentContact', function(){
		return{
			restrict: 'E',
			templateUrl: './tab-content/content-contact.cfm'
		};
	});
})();