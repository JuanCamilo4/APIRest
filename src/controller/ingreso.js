const express = require('express');
const ingresoSchema = require('../models/ingreso');

module.exports = {
    showIngreso: async (req, res) => {
        try {
            let ingreso = ingresoSchema.find().then((data) => {res.json(data)}).catch((err) => {res.json({message: err})});
        } catch (error) {
            res.status(500).json({error: error})
            
        }
    },
    saveIngreso: async (req, res) => {
        try {
            const ingreso = ingresoSchema(req.body); //El req.body es lo que yo le voy a enviar
            let ing = ingreso.save().then((data) => {res.json(data)}).catch((err) => {res.json({message: err})});
        } catch (error) {
            res.status(500).json({error: error})
        }
    },
    editarIngreso: async (req, res) => {
        try {
            const { id } = req.params;
            let ing = ingresoSchema.remove({ _id: id }).then((data) => {res.json(data)}).catch((err) => {res.json({message: err})});
        } catch (error) {
            res.status(500).json({error: error})
        }
    }
}
