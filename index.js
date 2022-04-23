const express = require('express');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser')
//const personaRoutes = require("src/routes/persona");
const ingresoRoutes = require("./src/routes/ingreso.route");
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, 	X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, 	DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});
const port = process.env.PORT | 9000;

//middlewars
app.use(express.json());
app.use('/api', ingresoRoutes);
app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());

//routes
app.get('/', (req, res) => {
    res.send('Hola mundo');
});

mongoose
    .connect(process.env.MONGODB_URI)
    .then((res) => {console.log('Connected to DB')})
    .catch((error) => {console.log(error)})

app.listen(port, () => {console.log('Servidor funcionando', port)});