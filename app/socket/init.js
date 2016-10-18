const socketio = require('socket.io')

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

function initSocket(app, port) {

	const webio = app.listen(port, function(err){
		if (err) { throw err }
		console.log(`Server is listening on ${port} port ...`)
	})
	console.log(webio)
	
	const io = socketio.listen(webio)

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