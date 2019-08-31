// Servidor en express
const express = require("express");
const app = express();

// Check port
const port = process.env.port || 3000;

// Require Schema's
const Articulo = require('../models/ArticuloSchema')


app.get("/", (req, res) => {
  console.log('Hello World');
});





// Send variables when this file is 'required'
module.exports = { app, port };
