ang.controller('SidePanelController',function($scope,User){
	$scope.User = User;
	$scope.User.name = "Anon";
	$scope.User.room = "root";
});
ang.controller('ChitController',function($scope,User){
	$scope.User = User;
	$scope.banner = "Chit";
});
ang.controller('ChatController',function($scope,User){
	socket.emit('update rooms', {});
	$scope.banner = "Chat";
	$scope.User = User;
	$scope.rooms;

	$scope.sendMessage = function(){
	  var data = { user    : User.name,
	               message : $('#message').val(),
								 room 	 : $scope.User.room}
	  socket.emit('message', data);
	  $('#message').val('');
	};
	$scope.joinRoom = function(room){
		var data = { user : User.name,
								 room : room }
		socket.emit('enter room', data);
		$scope.User.room = room;
	};
	$scope.leaveRoom = function(room){
		var data = { user : User.name,
								 room : $scope.User.room }
		socket.emit('leave room', data);
		$scope.User.room = "root";
	};	
});
ang.controller('CreateRoomController', function($scope, User){
	$scope.banner = "Create Room";
	$scope.createRoom = function(){
		var data = { user : User.name,
								 room : $('#roomName').val()
							 }
		socket.emit('create room', data);	
	}
});
ang.controller('SettingsController',function($scope){
	$scope.banner = "Settings";
});
