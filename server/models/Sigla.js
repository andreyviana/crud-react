const mongoose = require('mongoose');

const Siglas = new mongoose.Schema({
    Siglas: {
        type: String,
        required: true,
    },
})

const Sigla = mongoose.model('Siglas', Siglas);
module.exports = Sigla;