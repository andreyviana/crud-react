const mongoose = require('mongoose');

const DitadosPopulares = new mongoose.Schema({
    DitadosPopulares: {
        type: String,
        required: true,
    },
})

const Ditado = mongoose.model('DitadosPopulares', DitadosPopulares);
module.exports = Ditado;