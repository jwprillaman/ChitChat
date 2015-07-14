ang.controller('SidePanelController',function($scope,User){
	$scope.User = User;
	$scope.User.name = "Anon";
});
ang.controller('ChitController',function($scope,User){
	$scope.User = User;
	$scope.banner = "Chit";
});
ang.controller('ChatController',function($scope,User){
	$scope.banner = "Chat";
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
