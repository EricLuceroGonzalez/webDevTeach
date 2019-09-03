//
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schemas"
// Require artist schema file to save it ---> :
const Article = require("./ArticuloSchema");

const ticketSchema = new Schema({
  // ticket: mongoose.Schema.ObjectId,
  subtotal: { type: Number, default: 0 },
  ITBM: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  articles: [
    { type: mongoose.Schema.ObjectId, ref: "Article", required: true }
  ]
});


// Crear (convertir) el Schema to Model ---> mongoose.Model(modelName, schema)
const Ticket = mongoose.model('Ticket', ticketSchema);

// Exportar
module.exports = Ticket;
