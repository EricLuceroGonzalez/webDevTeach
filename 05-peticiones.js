// HHTP
const request = require("request");

request.get("https://swapi.co/api/people/1", (error, response, body) => {
  const json = JSON.parse(body);
  //   console.log(json);
});

function getPeopleByIdName(idPeople) {
  const URL = `https://swapi.co/api/people/${idPeople}`;
  console.log(URL);
  request.get(URL, (err, res, body) => {
    console.log(`Status code: ${res.statusCode}`);
    const bodyJson = JSON.parse(body);
    // Verificar el status:
    if (res.statusCode === 200) {
      console.log("Peticion Exitosa");
      console.log(`Status Code --> ${res.statusCode}`);
    } else {
      console.log("Peticion incorrecta");
      console.log(`Status Code --> ${res.statusCode}`);
    }
    console.log(bodyJson);
  });
}

// Ejercicios

/*----------------------------------------------------------------
1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
                    https://pokeapi.co/
----------------------------------------------------------------
*/

const URL_POKEMON = "http://pokeapi.co/api/v2/pokemon/1";

request.get(URL_POKEMON, (err, res, body) => {
  res.statusCode === 200
    ? console.log(JSON.parse(body).types.map(typeR => typeR.type.name))
    : console.log("error");
});

// var a = [1, 2, 3, 4, 5, 6, 7, 8];
// var b = a.map(maped => maped ** 2);
// console.log(b);

/*
----------------------------------------------------------------
2.- Hacer una funcion que haga una peticion 
    (Ejemplo: peticionLibro(“i robot”);
    Buscar un libro y traer el o los autores del primer libro
    
        http://openlibrary.org/search.json?q=i+robot) 
----------------------------------------------------------------
*/
const URL_libreria = "http://openlibrary.org/search.json?q=";

let funcionPeticionLibro = titulo => {
  let URL = URL_libreria + titulo;
  console.log(URL);
  request.get(URL_libreria, (err, res, body) => {
    if (res.statusCode === 200) {
      const json = JSON.parse(body);
      json.docs.map(doc =>
        doc.author_name.map(author_name => console.log(author_name))
      );
    } else console.log("Error");
  });
};

// funcionPeticionLibro("Rayuela");
funcionPeticionLibro("por quien doblan las campanas");

// Function peticion de libro
const resFunct = book => {
  openlibrary_url = `http://openlibrary.org/search.json?q=${book}`;

  request.get(openlibrary_url, (err, res, body) => {
    if (res.statusCode === 200) {
      const json = JSON.parse(body);
      for (let i = 0; i < json.docs.length; i++) {
        if (json.docs[i].title === book) {
          console.log(
            i +
              "--  " +
              json.docs[i].title +
              "; Author:  " +
              json.docs[i].author_name
          );
        }
      }
    } else {
      console.log("Error!");
    }
  });
};

const peticion = (book, resFunct) => {
  resFunct(book);
};

peticion("I, Robot", resFunct);
peticion("El aleph", resFunct);

const URL_LIBRERIA = "http://openlibrary.org/search.json?q=";
let peticionLibro = titulo => {
  let URL_FINAL = URL_LIBRERIA + titulo;
  request.get(URL_FINAL, (error, response, body) => {
    if (response.statusCode == 200) {
      var json = JSON.parse(body);
      console.log(json.docs[0].author_name[0]);
    } else console.log(response.statusCode, error);
  });
};

// peticionLibro("por quien doblan las campanas");
// peticionLibro("rayuela");
// peticionLibro("el aleph");
// peticionLibro("El quijote de la mancha");

let peticionAutor = autor => {
  let URL = "http://openlibrary.org/search.json?author=" + autor;

  request.get(URL, (err, res, body) => {
    res.statusCode == 200
      ? console.log(JSON.parse(body).docs.map(doc => doc.title_suggest))
      : console.log(error);
  });
};

// peticionAutor("Jorge Luis Borges");

/*
----------------------------------------------------------------
6.- Devolver los asteroides que sean potencialmente peligrosos
    para la tierra de la semana pasada hasta hoy.
                    https://api.nasa.gov/
----------------------------------------------------------------
*/

var now = new Date();
console.log(now);

var days = 7; // Days you want to subtract
var date = new Date();
var last = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
var day = last.getDate();
var month = last.getMonth() + 1;
var year = last.getFullYear();
var lastWeek = year + "-0" + month + "-" + day;
console.log(lastWeek);

apiKey = "xERxdQqz2PW9yLdg43sshxX2TUmnTY4YWd77WEG0";
const nasaApi = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${lastWeek}&api_key=${apiKey}`;
request.get(nasaApi, (err, res, body) => {
  if (res.statusCode === 200) {
    // parsear el body (legible)
    const json = JSON.parse(body);
    console.log("potentially_hazardous_asteroid!!!");
    //----------------------------------------------
    // Recorrer un objeto a traves de sus keys
    asteroid_counter = 0;
    for (var key in json.near_earth_objects) {
      // skip loop if the property is from prototype
      if (!json.near_earth_objects.hasOwnProperty(key)) continue;
      console.log("-----------------------");
      console.log("Fecha: " + key);
      var obj = json.near_earth_objects[key];

      for (var prop in obj) {
        if (obj[prop].is_potentially_hazardous_asteroid) {
          console.log("\t Nombre: " + obj[prop].name);
          asteroid_counter++
        }
        // skip loop if the property is from prototype
        if (!obj.hasOwnProperty(prop)) continue;
      }
    }
    console.log(`En total, desde ${lastWeek}, son ${asteroid_counter} asteroides`);
  } else console.log("Error!!!!");
});
/*
var now = new Date();
Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();
  return [
    this.getFullYear(),
    (mm > 9 ? "" : "0") + mm,
    (dd > 9 ? "" : "0") + dd
  ].join("-");
};

let Today = now.yyyymmdd();
var DaysEarlierString = now.setDate(now.getDate() - 7);
var DaysEarlierDate = new Date(DaysEarlierString);
var DaysEarlier = DaysEarlierDate.yyyymmdd();

// console.log(DaysLater);
let url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${apiKey}`;
// let url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date='+DaysEarlier+'&end_date='+Today+'&api_key='+apiKey;
request.get(url, (_error, _res, body) => {
  const json = JSON.parse(body);
  const neos = json.near_earth_objects;
  //console.log(neos);

  let today = new Date();
  for (let day = 6; day >= 0; day--) {
    let today = new Date();
    var DayString = today.setDate(today.getDate() - day);
    var DayDate = new Date(DayString);
    var Day = DayDate.yyyymmdd();
    hazardFlag = neos[Day][0].is_potentially_hazardous_asteroid;

    if (hazardFlag) {
      console.log(
        `When: ${Day} Id: ${neos[Day][0].id} Is potentially hazardous: ${neos[Day][0].is_potentially_hazardous_asteroid}`
      );
    }
  }
});
*/