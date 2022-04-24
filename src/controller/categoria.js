const express = require('express');
const categoriaSchema = require('../models/categoria');

module.exports = {
    showCategoria: async (req, res) => {
        try {
            let categoria = categoriaSchema.find().then((data) => {res.json(data)}).catch((err) => {res.json({message: err})});
        } catch (error) {
            res.status(500).json({error: error})
            
        }
    },
    saveCategoria: async (req, res) => {
        try {
            const categoria = categoriaSchema(req.body); //El req.body es lo que yo le voy a enviar
            let cat = categoria.save().then((data) => {res.json(data)}).catch((err) => {res.json({message: err})});
        } catch (error) {
            res.status(500).json({error: error})
        }
    },
    eliminarCategoria: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(id);
            let cat = categoriaSchema.remove({ _id: id }).then((data) => {res.json(data)}).catch((err) => {res.json({message: err})});
        } catch (error) {
            res.status(500).json({error: error})
        }
    }
}
