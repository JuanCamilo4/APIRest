const mongoose = require('mongoose');

const categoriaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('categoria', categoriaSchema);