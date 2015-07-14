
var socket = io();

socket.on('message', function(data){
	$('#walkie-view-chat').append($('<li>').text(data.user + ': ' + data.message));
});

