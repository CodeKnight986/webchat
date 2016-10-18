
function init(config) {
	
	const app = require('./web')(config)

	return {
		app: app,
		io: require('./socket').init(app, config.port)
	}
}

module.exports = init