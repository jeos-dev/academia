const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const atletaSchema = Schema({
    mat: Number,
    nome: String,
    biotipo: String
});

module.exports = mongoose.model("Atleta", atletaSchema);