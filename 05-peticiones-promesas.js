const request = require("request");

const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1/";

function getAuthor(nombre) {
  const URI = "authors/";
  const URL = URL_BASE + URI;

  // const jsonSend = {
  //     name:nombre,
  //     last_name:apellido,
  //     nacionalidad:"MX",
  //     biography:biografia,
  //     gender:genero,
  //     age:edad
  // }

  return new Promise((resolve, reject) => {
    request.get(URL, (err, response, body) => {
      if (response.statusCode === 200) {
        const json = JSON.parse(body);
        resolve(json);
      } else {
        reject(response.statusCode);
      }
    });
  });
}

getAuthor()
  .then(author => {
    console.log(author);
  })
  .catch(err => console.log(err));
