const mongoose = require('mongoose');

const paletaSchema = new mongoose.Schema({
  sabor: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  foto: {
    type: String,
    require: true,
  },
  preco: {
    type: Number,
    require: true,
  },
});

const Paleta = mongoose.model('paletas', paletaSchema)

module.exports = Paleta
