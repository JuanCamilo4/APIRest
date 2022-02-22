/*
    Plantilla de los datos que se van a guardar
*/
const mongoose = require('mongoose');

const personaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('persona', personaSchema);