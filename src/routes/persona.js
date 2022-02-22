/*
    Archivo para las rutas de CRUD
*/
const express = require("express");
const personaSchema = require("../models/persona");

const router = express.Router();

//Ruta de crear persona
router.post('/persona', (req, res) => {
    const persona = personaSchema(req.body); //El req.body es lo que yo le voy a enviar
    persona
        .save()
        .then((data) => {res.json(data)})
        .catch((err) => {res.json({message: err})});
});

//Ruta obtener Personas
router.get('/persona', (req, res) => {
    personaSchema
        .find()
        .then((data) => {res.json(data)})
        .catch((err) => {res.json({message: err})});
});

//Ruta obtener Personas en especifico por id
router.get('/persona/:id', (req, res) => {
    const { id } = req.params;
    personaSchema
        .findById(id)
        .then((data) => {res.json(data)})
        .catch((err) => {res.json({message: err})});
});

//Ruta personas sexo masculino
router.get('/personaMasculino', (req, res) => {
    personaSchema
        .find()
        .then((data) => {
            let personas = [];
            data.forEach((persona) => {
                if (persona.sexo == 'masculino') {
                    personas.push(persona);
                }
            })
            res.json(personas);
        })
        .catch((err) => {res.json({message: err})});
});

//Ruta personas sexo femenino
router.get('/personaFemenino', (req, res) => {
    personaSchema
        .find()
        .then((data) => {
            let personas = [];
            data.forEach((persona) => {
                if (persona.sexo == 'femenino') {
                    personas.push(persona);
                }
            })
            res.json(personas);
        })
        .catch((err) => {res.json({message: err})});
});

//Ruta editar Personas en especifico
router.put('/persona/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, fecha_nacimiento, sexo } = req.body;
    personaSchema
        .updateOne({ _id: id }, { $set: {nombre, fecha_nacimiento, sexo} })
        .then((data) => {res.json(data)})
        .catch((err) => {res.json({message: err})});
});

//Ruta eliminar Personas en especifico
router.delete('/persona/:id', (req, res) => {
    const { id } = req.params;
    personaSchema
        .remove({ _id: id })
        .then((data) => {res.json(data)})
        .catch((err) => {res.json({message: err})});
});


module.exports = router;