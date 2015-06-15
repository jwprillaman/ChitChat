app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : '/html/home.html',
			controller  : 'HomeController'
		})
		.when('/walkie',{
			templateUrl : '/html/walkie.html',
			controller  : 'WalkieController'
		})
		.when('/settings',{
			templateUrl : '/html/settings.html',
			controller  : 'SettingsController'
		})
});

