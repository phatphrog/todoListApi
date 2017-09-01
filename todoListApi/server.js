var express = require ('express'),
	app = express(),
	port = process.env.PORT || 3000;
	mongoose = require('mongoose'),
	Task = require('./api/models/todoListModel'),
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var cors = require('cors');
app.use(cors({origin: 'http://localhost:4200'}));

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

//add middleware here!
app.use(function(req, res){ 

	/*//allow our todo angular api to connect!
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	
  	//allow all the REST api request methods
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	//request headers we want to allow 
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With-, content-type');*/

	res.status(404).send({url: req.originalUrl + ' not found'})

	//next();
});

console.log('todo list RESTful API server started on: ' + port);