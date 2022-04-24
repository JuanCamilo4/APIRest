const mongoose = require('mongoose');
Schema = mongoose.Schema;

const ingresoSchema = mongoose.Schema({
    typePay: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ingreso', ingresoSchema);