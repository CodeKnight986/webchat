const app = require('./web')

function init(config) {
	
	const io = require('./socket').init(app, config.port)
	return {
		app: app,
		io: io
	}
}

module.exports = init