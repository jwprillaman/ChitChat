socket.on('message', function(data){
	$('#walkie-view-chat').append($('<li>').text(data.user + ': ' + data.message));
});

function sendMessage(){
	var data = { user: 'anon',
							 message: $('#message').val()}
	socket.emit('message', data);
};
