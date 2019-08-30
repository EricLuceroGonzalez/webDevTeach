const request = require("request");

// Promesas-ejercicios

/*
----------------------------------------------------------------
    Escribe el código del CRUD de la siguiente API genérica:
        https://goodreads-devf-aaron.herokuapp.com/docs/ 
    1.- Escribe una función que reciba como parámetros nombre,
        nacionalidad, biografía, género y edad para hacer una
        petición a la API para crear un autor nuevo. 
        La función debe retornar el autor nuevo en una promesa. 
----------------------------------------------------------------
*/
const URL_API = "https://goodreads-devf-aaron.herokuapp.com/api/v1/";
let api_url = "https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/";

// Define the create arrow-function   (input values) => {do something}:
const creatingAuthor = (
  name,
  last_name,
  nacionalidad,
  biography,
  gender,
  age,
  is_alive
) => {
  // Create the json we will send:
  const jsonToSend = {
    name: name,
    last_name: last_name,
    nacionalidad: nacionalidad,
    biography: biography,
    gender: gender,
    age: age,
    is_alive: is_alive
  };

  return new Promise((resolve, reject) => {
    request.post(
      URL_API + "authors/",
      { form: jsonToSend },
      (err, res, body) => {
        //   let json = JSON.parse(body);
        console.log(`\nStatus: ${res.statusCode}`);
        res.statusCode == 201
          ? resolve(JSON.parse(body))
          : reject(JSON.parse(body));
      }
    );
  });
};

/*
----------------------------------------------------------------
    2.- Escribe una función que reciba como parámetro un ID
        para realizar una petición a la API para hallar un 
        autor con el ID especificado. La función debe retornar
        una promesa con la respuesta del servidor. 
----------------------------------------------------------------
*/
var getAuthorById = theID => {
  const URI = `authors/${theID}`;
  // Darle
  return new Promise((resolve, reject) => {
    request.get(URL_API + URI, (err, res, body) => {
      res.statusCode === 200
        ? resolve(JSON.parse(body))
        : reject(`404: el autor con el id: ${theID} no esciste`);
    });
  });
};

// function createAuthor(nombre,apellido,nacionalidad,biografia,genero,edad,vida)
creatingAuthor("Eric", "Lusero", "MX", "Bipolar", "M", 135, true)
  .then(newAuthor => console.log(newAuthor))
  .catch(err => console.log(err));

creatingAuthor("Rosendo", "Lusero", "MX", "Loca", "F", 135)
  .then(newAuthor => console.log(newAuthor))
  .catch(err => console.log(err));

creatingAuthor("Eric", true)
  .then(newAuthor => console.log(newAuthor))
  .catch(err => console.log(err));

getAuthorById(2993)
  .then(author => {
    console.log("\n -----------------");
    console.log("Consulta exitosa:");
    console.log(author);
  })
  .catch(err => console.log(err));


  getAuthorById(2948)
  .then(author => {
    console.log("\n -----------------");
    console.log("Consulta exitosa:");
    console.log(author);
  })
  .catch(err => console.log(err));

  getAuthorById(2951)
  .then(author => {
    console.log("\n -----------------");
    console.log("Consulta exitosa:");
    console.log(author);
  })
  .catch(err => console.log(err));

 /*
----------------------------------------------------------------
    3.- Escribe una función que reciba como parámetros nombre,
        nacionalidad, biografía, género y edad para hacer una
        petición a la API para modificar un autor existente.
        Al ejecutar La función, esta debe retornar el autor 
        modificado en una promesa.
----------------------------------------------------------------
*/ 