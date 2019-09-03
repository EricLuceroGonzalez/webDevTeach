// Servidor en express
const express = require("express");
const app = express();

// Check port
const port = process.env.port || 3000;

// ----------- BODY PARSER  ---------------
var bodyParser = require("body-parser");
// for parsing application/json
app.use(bodyParser.json()); 
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 


// Require Schema's
const Articulo = require("../models/ArticuloSchema");
const Ticket = require("../models/TicketSchema");

app.get("/", (req, res) => {
  console.log("Hello World");
});

// -------------   CRUD  -----------------
//  C: CREATE ------------
app.post("/api/v1/articulo", (req, res) => {
  // Recibir el articulo
  const articuloInfo = req.body;
  console.log("req.body");
  console.log(articuloInfo);

  // Guardar en db
  const newArticulo = new Articulo(articuloInfo);
  newArticulo.save((err, newArticulo) => {
    return err
      ? res.status(400).send({ mensaje: "Hay un error", res: err })
      : res
          .status(200)
          .send({ mensaje: "Articulo guardado", res: newArticulo });
  });
});

app.post("/api/v1/ticket", (req, res) => {
  //Recibir el body de la peticion
  const ticketBody = req.body;

  // Guardar en db:
  const newTicket = new Ticket(ticketBody);
  newTicket.save((err, newTicket) => {
    return err
      ? res
          .status(400)
          .send({ mensaje: "Hay un error al enviar ticket", res: err })
      : res.status(200).send({ mensaje: "Ticket guardado", res: newTicket });
  });
});

//  R: READ ------------
//  U: UPDATE ------------
//  D: DELETE ------------

// Send variables when this file is 'required'
module.exports = { app, port };



// {
//   "name": "Eric Testing No. 0",
//   "price": 50,
//   "onExistence": true
// }

// {
//   "subtotal": "Eric Testing No. 0",
//   "ITBM": 7,
//   "total": 100,
//   "articles":,
// }