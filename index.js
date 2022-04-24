const express = require('express');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser')
const ingresoRoutes = require("./src/routes/ingreso");
const categoryRoutes = require("./src/routes/categoria");
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
app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());

//routes
app.get('/', (req, res) => {
    res.send('Hola mundo');
});
app.use('/api/ingreso', ingresoRoutes);
app.use('/api/category', categoryRoutes);

mongoose
    .connect(process.env.MONGODB_URI)
    .then((res) => {console.log('Connected to DB')})
    .catch((error) => {console.log(error)})

app.listen(port, () => {console.log('Servidor funcionando', port)});