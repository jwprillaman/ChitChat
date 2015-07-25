ang.controller('SidePanelController',function($scope,User){
	$scope.User = User;
	$scope.User.name = "Anon";
	$scope.User.room = "root";
});
ang.controller('ChitController',function($scope,User){
	$scope.User = User;
	$scope.banner = "Chit";
	$scope.goJoin = function(){
		console.log("goJoin");
		window.history.pushState('location','goJoin','/#/join');
	};
});
ang.controller('ChatController',function($scope,User){
	$scope.banner = "Chat";
	$scope.User = User;
	$scope.rooms;
	$scope.room = User.room;
	$scope.sendMessage = function(){
	  var data = { user    : User.name,
	               message : $('#message').val(),
								 room 	 : $scope.User.room}
	  socket.emit('message', data);
	  $('#message').val('');
	};
	$scope.leaveRoom = function(room){
		var data = { user : User.name,
								 room : $scope.User.room }
		socket.emit('leave room', data);
		$scope.User.room = "root";
		window.history.pushState('location','leaveRoom','/#/join');
	};	
});
ang.controller('CreateRoomController', function($scope, User, $location){
	$scope.banner = "Create Room";
	$scope.User = User;
	$scope.createRoom = function(){
		var data = { user : User.name,
								 room : $('#roomName').val()
							 }
		socket.emit('create room', data);
		$scope.User.room = $('#roomName').val();
		socket.emit('enter room', data);	
		window.history.pushState('location','createRoom','/#/chat')
	}
});
ang.controller('JoinController', function($scope, User){
	socket.emit('update rooms', {});
	$scope.banner = "Join Room";
	$scope.User = User;
	$scope.rooms = [];
	$scope.joinRoom = function(room){
		var data = { user : User.name,
								 room : room }
		socket.emit('enter room', data);
		$scope.User.room = room;
		window.history.pushState('location','joinRoom','/#/chat');
	};
	$scope.createRoom = function(){
		window.history.pushState('location','gotToCreateRoom','/#/createRoom');
	};
});
ang.controller('SettingsController',function($scope){
	$scope.banner = "Settings";
});
