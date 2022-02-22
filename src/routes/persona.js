/*
    Archivo para las rutas de CRUD
*/
const express = require("express");

const router = express.Router();

//Ruta de crear persona
router.post('/persona', (req, res) => {
    res.send('Crear usuario');
})

module.exports = router;