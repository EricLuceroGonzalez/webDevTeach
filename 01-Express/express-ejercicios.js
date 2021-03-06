/*
----------------------------------------------------------------
                    Backend con Express JS
----------------------------------------------------------------
*/
var express = require("express");
var request = require("request");
var app = express();
var port = 3000;

/*
----------------------------------------------------------------
    1.- Agrega un endpoint '/api/' que responda a 
        una petición de tipo GET con un código de estado 200 
        y el siguiente json: 
                    {'mensaje':'hola mundo'}
----------------------------------------------------------------
*/
app.get("/api/", (err, res) => {
  res.status(200).send({ message: "Hola Mundo" });
});

/*
----------------------------------------------------------------
    2.- Agrega un endpoint '/api/suma' que responda a una 
        petición de tipo GET con la suma de dos números que 
        reciba mediante las querys num1 y num2. El servidor
        debe responder con un código de estado 200 y un json 
        como el siguiente:
                        {'resultado': 7}
----------------------------------------------------------------
*/
// app.get("/api/suma", (req, res) => {
//   var num1 = req.query.num1;
//   var num2 = req.query.num2;
//   let suma = num1 + num2
//   // console.log(suma);
//   res.status(200).send({ message: `Suma: ${suma}` });
// });

app.get("/api/suma", (req, res) => {
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  let suma = Number(num1) + Number(num2);
  console.log(`LA suma es: ${suma}`);
  res.status(200).send({ message: `Suma: ${suma}` });
});

/*
----------------------------------------------------------------
    3.- Agrega un endpoint '/api/usuario/' que responda a
        una petición de tipo GET con el nombre que sea 
        recibido a través de params. El servidor debe responder
        con un código de estado 200 y un json como este:
                      {'usuario': 'Edwin'}
----------------------------------------------------------------
*/
// app.get("", (req, res) => {});
app.get("/api/:usuario/", (req, res) => {
  res.send(req.params);
});
/*
----------------------------------------------------------------
    4.- Agrega un endpoint '/api/swapi' que responda a una
        petición de tipo GET con el personaje solicitado de 
                        https://swapi.co/
        El cliente debe mandar el número de personaje mediante
        params. La respuesta del servidor debe lucir algo así
                    {'personaje': {
                        'name': 'Luke Skywalker',
                        ...,
                    }}
----------------------------------------------------------------
*/
app.get("/api/swapi/:personaje", (req, res) => {
  const promesa_API = new Promise((resolve, reject) => {
    const URL_swapi = `https://swapi.co/api/people/${req.params.personaje}`;

    // Request a la swapi
    request.get(URL_swapi, (err, res, body) => {
      res.statusCode === 200 
      ? resolve(JSON.parse(body)) 
      : reject(" Error ");
    });
  });
  // Llamada a la promesa
  promesa_API
    .then(json => {
      console.log(`El personaje No. ${req.params.personaje} es ${json.name}`);
      res.status(200).send({ personaje: json });
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(port, () =>
  console.log(`Servidor en puerto ${port} - ejercicios ExpressJS`)
);
