ang.controller('SidePanelController',function($scope,User){
	$scope.User = User;
	$scope.User.name = "anon";
});
ang.controller('HomeController',function($scope,User){
	$scope.User = User;
	$scope.banner = "Welcome";
});
ang.controller('WalkieController',function($scope,User){
	$scope.banner = "Walkie";
	$scope.User = User;

	$scope.sendMessage = function(){
	  var data = { user: User.name,
	               message: $('#message').val()}
	  socket.emit('message', data);
	  $('#message').val('');
	};
});
ang.controller('SettingsController',function($scope){
	$scope.banner = "Settings";
});
