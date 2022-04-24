const express = require('express');
const categoriaCtrl = require('../controller/categoria');

const router = express.Router();

router.get('/categoria', categoriaCtrl.showCategoria)

router.post('/categoria', categoriaCtrl.saveCategoria);

router.delete('/categoria/:id', categoriaCtrl.eliminarCategoria);

module.exports = router;