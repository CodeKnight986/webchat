const socketio = require('socket.io')

var Entities = require('html-entities').AllHtmlEntities;
var entities = new Entities();

const io = null;


function initSocket(app, port) {

	const io = socketio.listen(app.listen(port, function(err){
		if (err) { throw err }
		console.log(`Server is listening on ${port} port ...`)
	}))

	io.sockets.on('connection', (socket)=>{
		socket.emit('message', {m: 'Welcome to chat!'})
		socket.on('send', (data)=>{
			// console.log(data);
			data.m = entities.encode(data.m)
			io.sockets.emit('message', data)
		})
	})

	return io
}


module.exports = initSocket