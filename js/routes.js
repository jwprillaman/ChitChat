app.config(function($routeProvider){
	$.routeProvider
		.when('/', {
			templateUrl : 'home.html',
			controller  : 'HomeController'
		})
		.when('/walkie',{
			templateUrl : 'walkie.html',
			controller  : 'WalkieController'
		})
		.when('/settings',{
			templateUrl : 'settings.html',
			controller  : 'SettingsController'
		});
});

