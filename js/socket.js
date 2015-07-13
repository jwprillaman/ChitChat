var socketIo = require('socket.io');

module.exports.listen = function(app){
	io = socketIo.listen(app);

	io.on('connection', function(socket){
		console.log('Anon connected');
		socket.on('disconnect', function(){
			console.log('Anon disconnected');
		});
		socket.on('message', function(data){
			console.log(data.user + ': ' + data.message);
			io.emit('message', data);
		});
	});
	return io;
};
	
	
