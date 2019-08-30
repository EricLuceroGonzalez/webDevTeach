var express = require("express");
var app = express();
var port = 3000;

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.get("/home", (req, res) => {
  res.send("Hola desde el Home");
});

app.get("/api/v1/articulo", (req, res) => {
  console.log(req.query);
//   res.status(200).send({ message: "consulta de /api/v1/articulo" });
  res.status(200).send('<p>some html</p>')
});

// Parametros
app.get('/api/v1/articulo/:id/', (req, res) => {
    const ID = req.params.id
    res.status(200).send( { message: `El id solicitado es ${ID}`})
})

// Querys
app.get('/api/v1/articulos', (req, res) => {
    const {queryA, queryB} = req.query
    res.status(200).send( { message: `queryA = ${queryA}, queryB = ${queryB}`})
})



app.listen(port, () => console.log(`Servidor listo desde puerto ${port}`));
