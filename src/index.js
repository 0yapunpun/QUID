const express = require('express');
// const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const  router = require('./routes/router');

//Session
// app.use(session({secret: 'credimarcas_session',saveUninitialized: true,resave: true}));

//Configuracion
app.set('port', process.env.PORT || 6066);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares
app.use((req, res, next) => {
	next();
});
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/', router);

//static files
app.use(express.static(path.join(__dirname, '/public')));


app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});


