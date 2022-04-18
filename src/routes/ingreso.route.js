const express = require('express');
const ingresoSchema = require('../models/ingreso.model.js');

const router = express.Router();

router.get('/ingreso', (req, res) => {
    ingresoSchema
        .find()
        .then((data) => res.json(data))
});

router.post('/ingreso', (req, res) => {
    const ingreso = ingresoSchema(req.body); //El req.body es lo que yo le voy a enviar
    ingreso
        .save()
        .then((data) => {res.json(data)})
        .catch((err) => {res.json({message: err})});
});

router.delete('/ingreso/:id', (req, res) => {
    const { id } = req.params;
    ingresoSchema
        .remove({ _id: id })
        .then((data) => {res.json(data)})
        .catch((err) => {res.json({message: err})});
});

module.exports = router;