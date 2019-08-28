// import { Largometraje } from './Largometraje';
var Largometraje = require('./Largometraje')

class Pelicula extends Largometraje{
    constructor(titulo, duracion, genero){
        super(titulo)
        this.duracion = duracion;
        this.genero = genero;
    }

    getGenero(){
        return this.genero;
    }
}

module.exports = Pelicula