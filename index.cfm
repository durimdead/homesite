<!DOCTYPE html>

<html lang="em" ng-app="jsApp">
<head>

	<meta charset="utf-8">

	<!--- include css for bootstrap and jquery UI --->
	<link rel="stylesheet" href="libraries/bootstrap/v3.0.3/css/bootstrap.min.css">
	<link rel="stylesheet" href="libraries/bootstrap/v3.0.3/css/bootstrap-theme.min.css">

	<!--- include javascript files for jquery and bootstrap --->
	<script src="javascript/jquery/jquery-1.11.1.min.js"></script>
	<script src="libraries/bootstrap/v3.0.3/js/bootstrap.min.js"></script>

	<!--- angularjs source --->
	<script src="https://code.angularjs.org/1.2.20/angular.js"></script>
	<script src="https://code.angularjs.org/1.2.20/angular-route.js"></script>

	<!--- other style sheets --->
	<link rel="stylesheet" href="css/headerStyle.css">
	<link rel="stylesheet" href="css/navigation.css">

	<!--- other javascript files --->
	<script src="javascript/navigation/navBar.js"></script>
	<script src="javascript/angularjs/app.js"></script>

</head>

<body>
	<div class="container">
		<div class="row header">
			<div class="col-md-12">
				<ul class="nav nav-tabs" role="tablist" ng-controller="navBarController as navBar">
					<li class="main-navigation-tabs" ng-data-contentID="{{item.navID}}" ng-repeat="item in navBar.Items"><a href="#">{{item.name}}</a></li>
				</ul>
			</div>
		</div>

		<cfset list_pages = "home,projects,about,contact"/>
		<cfset index = 1/>
		<cfloop list="#list_pages#" index="currentPage" delimiters=",">
			<cfoutput>
			<cfif index EQ 1>
				<div class="tab-content" ng-data-contentID="#index#">
			<cfelse>
				<div class="tab-content tab-hidden" ng-data-contentID="#index#">
			</cfif>
				<content-#currentPage#></content-#currentPage#>
			</div>
			<cfset variables.index = variables.index + 1/>
			</cfoutput>
		</cfloop>
	</div>
</body>
</html>