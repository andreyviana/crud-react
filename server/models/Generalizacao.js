const mongoose = require('mongoose');

const Generalizacoes = new mongoose.Schema({
    Generalizacoes: {
        type: String,
        required: true,
    },
})

const Generalizacao = mongoose.model('Generalizacoes', Generalizacoes);
module.exports = Generalizacao;