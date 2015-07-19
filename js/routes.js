ang.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : '/html/chit.html',
			controller  : 'ChatController'
		})
		.when('/chat',{
			templateUrl : '/html/chat.html',
			controller  : 'ChatController'
		})
		.when('/settings',{
			templateUrl : '/html/settings.html',
			controller  : 'SettingsController'
		})
		.when('/createRoom',{
			templateUrl : '/html/createRoom.html',
			controller  : 'CreateRoomController'
		})
});

