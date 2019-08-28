/*
                        Herencia
------------------------------------------------------------
1. Hacer superclase Maestro y subclases Maestro de Física y 
   Maestro de Música y a cada uno asignarle su materia y 
   calcular su promedio de grupo a partir de calificaciones 
   (puedes usar arreglos). El maestro de física tiene un 
   atributo "antiguedad" que guarda un valor numerico, 
   mientras que el maestro de música tiene un atributo "edad"
   también guardando un valor numérico.
------------------------------------------------------------
*/

class Maestro {
  constructor(materia, calificaciones) {
    this.materia = materia;
    this.calificaciones = calificaciones;
  }
  // Metodo para calcular promedio a partir del arreglo calificaciones
  promedio() {
    var sumaNotas = 0;
    for (let i = 0; i < this.calificaciones.length; i++) {
      sumaNotas = sumaNotas + this.calificaciones[i];
    }
    return sumaNotas / this.calificaciones.length;
  }
}

class MaestroFisica extends Maestro {
  constructor(materia, calificaciones, antiguedad) {
    super(materia, calificaciones);
    this.antiguedad = antiguedad;
  }
}

class MaestroMusica extends Maestro {
  constructor(materia, calificaciones, edad) {
    super();
    // super(materia, calificaciones);
    this.materia = materia;
    this.calificaciones = calificaciones;
    this.edad = edad;
  }
}
// materia, calificaciones,
var maestroFisica_A = new MaestroFisica("Fisica", [90, 70, 60, 20], 10);
var maestro = new MaestroMusica("Musica", [92, 45, 30, 29], 10);

console.log(maestroFisica_A);
console.log(maestro);
console.log("-----\n");
console.log(maestroFisica_A.promedio());
console.log(maestro.promedio());

/*
------------------------------------------------------------
2.- Crea una superclase llamada Electrodoméstico con las 
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color 
       y capacidad. 
    c. consumoEnergetico debe iniciar con valor de 100
------------------------------------------------------------
*/

class Electrodomestico {
  constructor(precio, color, capacidad) {
    this.precio = precio;
    this.color = color;
    this.capacidad = capacidad;
    this.consumoEnergetico = 100;
  }
  getConsumo() {
    return this.consumoEnergetico;
  }
  setConsumo(param) {
    this.consumoEnergetico = param;
  }
}

/*
------------------------------------------------------------
3.- Crea una subclase de Electrodomestico llamada Lavadora con las siguientes características:
    a. Su atributo es carga(kg de ropa), además de los atributos heredados.
    b. Crea el método precioFinal(). Este se calcula multiplicando el consumoEnergetico por la carga.
------------------------------------------------------------
*/

class Lavadora extends Electrodomestico {
  constructor(precio, color, capacidad, carga) {
    super(precio, color, capacidad);
    this.carga = carga;
  }
  precioFinal() {
    console.log("-------------");
    console.log(this.getConsumo());
    const precio_Final = this.getConsumo() * this.carga;
    return `Precio Final = ${precio_Final}`;
  }
}

const lavadora = new Lavadora(300, "blanco", 20, 10);
console.log(lavadora);
console.log(lavadora.precioFinal());
lavadora.setConsumo(340);
console.log(lavadora.precioFinal());

/*
------------------------------------------------------------
5.- Crear una clase Bebida que herede a dos clases Cerveza 
    y Refresco. Ambas clases deben tener la propiedad 
    cantidad (ml). La clase Refresco debe tener el atributo
    azucar(g) y la clase Cerveza debe el atributo 
    porcentajeAlcohol. Crear los getters y setters
    correspondientes.
------------------------------------------------------------
*/
// ----------------------------   Clase Bebida (PADRE)
class Bebida {
  constructor(cantidad) {
    this.cantidad = cantidad;
  }
  getCantidad() {
    return this.cantidad;
  }
  setCantidad(param_cantidad) {
    this.cantidad = param_cantidad;
  }
}

// ----------------------------   Clase Cerveza
class Cerveza extends Bebida{
  constructor(cantidad, porcentajeAlcohol) {
    super(cantidad);
    this.porcentajeAlcohol = porcentajeAlcohol;
  }
  getPorcentaje() {
    return this.porcentajeAlcohol;
  }
  setPorcentaje(parametro_porcentaje) {
    this.porcentajeAlcohol = parametro_porcentaje;
  }
}

// ----------------------------   Clase Refresco
class Refresco extends Bebida{
    constructor(cantidad, azucar){
        super(cantidad);
        this.azucar = azucar;
    }

    getAzucar(){
        return this.azucar;
    }
    setAzucar(param_azucar){
        this.azucar = param_azucar;
    }
}
console.log('----------------------------\n');

var CocaCola = new Refresco(330, 42);
var Pepsi = new Refresco(430, 30);
var balboa = new Cerveza(333, 6)
var heineken = new Cerveza(265, 7)

console.log(CocaCola);
console.log(Pepsi);
console.log(balboa);
console.log(heineken);
heineken.setPorcentaje(1000)
console.log(heineken);
