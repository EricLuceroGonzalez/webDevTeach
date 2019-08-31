//
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema
const articuloSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number },
  onExistence: { type: Boolean }
});

// Crear (convertir) el Schema to Model ---> mongoose.Model(modelName, schema)
const Articulo = mongoose.model('Articulo', articuloSchema);

// Exportar
module.exports = Articulo;
