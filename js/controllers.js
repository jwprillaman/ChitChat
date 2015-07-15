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
	$scope.Room = "room";

	$scope.sendMessage = function(){
	  var data = { user    : User.name,
	               message : $('#message').val()}
	  socket.emit('message', data);
	  $('#message').val('');
	};
	$scope.joinRoom = function(){
		var data = { user : User.name,
								 room : $scope.Room }
		socket.emit('enter room', data);
	};
	$scope.leaveRoom = function(){
		var data = { user : User.name,
								 room : $scope.Room }
		socket.emit('leave room', data);
	};	
});
ang.controller('SettingsController',function($scope){
	$scope.banner = "Settings";
});
