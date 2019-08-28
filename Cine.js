// import { Documental } from "./Documental";
// import { Pelicula } from './Pelicula';
var Pelicula = require('./Pelicula')
var Documental = require('./Documental');

class Cine {
  constructor(sala) {
    this.sala = sala;
  }

  reproducir(parametro) {
    // console.log('reproduciendo el largometraje: ' + largometraje.getTitulo());
    console.log(`reproduciendo el largometraje:  ${parametro.getTitulo()}`);
  }
}

// Peliculas y documentales
const hercules = new Pelicula('Hercules','90 min','Animacion');
const caidaHitler = new Documental("La caida de hitler", "Juanito Perez");
let cineSelina = new Cine(3);

console.log(cineSelina);
console.log(hercules);
console.log(cineSelina.reproducir(hercules));
console.log(cineSelina.reproducir(caidaHitler));
