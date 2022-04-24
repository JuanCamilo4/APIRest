const express = require('express');
const ingresoCtrl = require('../controller/ingreso');

const router = express.Router();

router.get('/ingreso', ingresoCtrl.showIngreso);

router.post('/ingreso', ingresoCtrl.saveIngreso);

router.delete('/ingreso/:id', ingresoCtrl.editarIngreso);

module.exports = router;