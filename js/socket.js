var socketIo = require('socket.io');

module.exports.listen = function(app){
	io = socketIo.listen(app);

	var users = [];
	io.on('connection', function(socket){
		console.log('Anon connected');
		socket.on('disconnect', function(){
			console.log('Anon disconnected');
		});
		socket.on('message', function(data){
			console.log(data.user + ': ' + data.message);
			io.emit('message', data);
		});

		
		socket.on('enter room', function(data){
			users.push(data.user);
			io.emit('update users', users);
		});
		socket.on('leave room', function(data){
			for(var i = 0; i < users.length; i++){
				if(users[i] == data.user){
						users.splice(i, 1);
						break;
				}
			}
			
			io.emit('update users', users);		
		});
	});
	return io;
};
	
	

