const express = require('express');
const { default: mongoose } = require('mongoose');
const personaRoutes = require("./routes/persona");

require('dotenv').config();

const app = express();
const port = process.env.PORT | 9000;

//middlewars
app.use('/api', personaRoutes);

//routes
app.get('/', (req, res) => {
    res.send('Hola mundo');
});

mongoose
    .connect(process.env.MONGODB_URI)
    .then((res) => {console.log('Connected to DB')})
    .catch((error) => {console.log(error)})

app.listen(port, () => {console.log('Servidor funcionando', port)});