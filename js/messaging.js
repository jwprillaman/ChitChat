var socket = io();

socket.on('message', function(data){
	$('#chat-feed').append($('<li>').text(data.user + ': ' + data.message));
});


socket.on('update users', function(users){
	if(users[0] != undefined){
		userList = '<li>' + users[0] + '</li>';
		for(var i = 1; i < users.length; i++){
			userList = userList + '<li>' + users[i] + '</li>'
		}
	}else{
		userList = '<span>None</span>';
	}

	$('#chat-user-list').html(userList);
});

