const { Schema, model } = require('mongoose');

const AvisoSchema = new Schema({
    titulo: {
        type: String        
    },

    descripcion: {
        type: String
    }
});

const Aviso = model('aviso', AvisoSchema);

module.exports = Aviso;