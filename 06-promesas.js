// // Promesas
const request = require("request");
// // var unaPromesa = new Promise(//funciion)

// var unaPromesa = new Promise((resolve, reject) => {
//   var numeroAleatorio = Math.random() * 10;
//   console.log(`numeroAleatorio = ${numeroAleatorio}`);

//   if (numeroAleatorio >= 3) {
//     var todoBien = "resolve";
//     resolve(todoBien);
//   } else {
//     var todoMal = "reject";
//     reject(todoMal);
//   }
// });

// unaPromesa
//   .then(res => console.log(res))
//   .catch(err => console.log('error'));

//   // Otro ejemplo
//   const promise = new Promise(  (resolve, reject) => {
//     const number = Math.floor(Math.random() * 10);
//    console.log(`Numero Aleatorio: ${number}`);

//       setTimeout(
//     () => number > 5
//       ? resolve(number)
//       : reject(new Error('Menor a 5')),
//       5000
//     );});

//   promise
//     .then(number => console.log(number))
//     .catch(error => console.error(error));

function getPeopleId(peopleID) {
  return new Promise((resolve, reject) => {
    const URL_people = `https://swapi.co/api/people/${peopleID}/`;
    console.log(`URL solicitado: ${URL_people}`);
    // Metodo get para traer los personajes de la API
    request.get(URL_people, (err, res, body) => {
      const json = JSON.parse(body);
      res.statusCode === 200 ? resolve(json) : reject("Error en la peticion.");
    });
  });
}

getPeopleId(1)
  .then(json => console.log(json.name))
  .catch(err => console.log(err));

  getPeopleId(1)
  .then(json => console.log(json.films))
  .catch(err => console.log(err));

  getPeopleId(100)
  .then(json => console.log(json.name))
  .catch(err => console.log(err));
