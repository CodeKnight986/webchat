const app = require('./web')

function init(config) {
	
	const io = require('./socket').init(app, config.env.port)
	return {
		app: app,
		io: io
	}
}

module.exports = init