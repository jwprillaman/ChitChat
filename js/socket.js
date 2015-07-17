var socketIo = require('socket.io');

module.exports.listen = function(app){
	io = socketIo.listen(app);

	var users = [];
	var rooms = ['root'];
	io.on('connection', function(socket){
		console.log('Anon connected');

		// emit initial room list
		socket.emit('update rooms', rooms);
		socket.on('disconnect', function(){
			console.log('Anon disconnected');
		});
		socket.on('message', function(data){
			console.log(data.user + ': ' + data.message + "!for room " + data.room);
			//io.emit('message', data);
			io.to(data.room).emit('message', data);
		});

		
		socket.on('enter room', function(data){
			users.push(data.user);
			socket.join(data.room);
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
		socket.on('create room', function(data){
			rooms.push(data.room);
			console.log( data.user + " created room " + data.room);
			io.emit('update rooms', rooms);
		});
		socket.on('update rooms', function(data){
			io.emit('update rooms', rooms);
		});
	});
	return io;
};
	
	

