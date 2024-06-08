const mongoose = require('mongoose');

const turnerowebSchema = mongoose.Schema(
    {
        fecha: {
            type: String,
            required: true
        },
        hora: {
            type: String,
            required: true
        },
        categoria: {
            type: String,
            required: true
        },
        numero: {
            type: Number,
            required: true
        },
        nombre: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('TurneroWeb', turnerowebSchema);