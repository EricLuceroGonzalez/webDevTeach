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

theaudiodb_url = "http://www.theaudiodb.com/api/v1/json/1/search.php?s=";

// const searchGenero = (url, banda) => {
request.get(`http://www.theaudiodb.com/api/v1/json/1/search.php?s=mana`, (err, res, body) => {
  if (res.statusCode === 200) {
    const json = JSON.parse(body);
    for (let i = 0; i < json.artists.length; i++) {
      console.log('\n\n Genero: ' + json.artists[i].strStyle);
    }
  } else {
    console.log("fuck!");
  }
});
// };