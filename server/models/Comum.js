const mongoose = require('mongoose');

const PalavrasComuns = new mongoose.Schema({
    PalavrasComuns: {
        type: String,
        required: true,
    },
})

const Comum = mongoose.model('PalavrasComuns', PalavrasComuns);
module.exports = Comum;