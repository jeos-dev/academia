const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personalSchema = Schema({
    mat: Number,
    nome: String,
    especialidade: String
});

module.exports = mongoose.model("Personal", personalSchema);