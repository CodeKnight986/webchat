const app = require('./web')

function init(port) {
	return {
		app: app,
		io: require('./socket').init(app, port)
	}
}

module.exports = init