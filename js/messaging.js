
var socket = io();

socket.on('message', function(data){
	$('#chat-feed').append($('<li>').text(data.user + ': ' + data.message));
});

