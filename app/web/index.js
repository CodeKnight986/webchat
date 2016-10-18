const path = require('path')

const express = require('express')
const exphbs = require('express-handlebars')



const app = express()

function intApp(config) {
	
	app.engine('.tpl', exphbs({
		defaultLayout: 'layout',
		extname: '.tpl',
		layoutsDir: path.join(__dirname),
		partialsDir: path.join(__dirname),
		helpers: {
	        base_url: function () { return config.url; }
	    }
	}))
	app.set('view engine', '.tpl')
	app.set('views', path.join(__dirname))


	app.use(express.static(path.join(__dirname, '../..', 'public')))
	app.get("/", function(req, res) {
		// res.send("It works!");
		res.render('main')
	})

	return app

}



module.exports = {
	init: intApp
}