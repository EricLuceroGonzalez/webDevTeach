// Objetos
const ayudanteDeSantaA = {
    raza: 'Galgo', 
    color: 'cafe', 
    patas: '4',
    pelo: 'corto',
    ladrar: function() {
        return 'Wuuuff';
    }
}

// Dot-Notation
console.log(ayudanteDeSantaA.color);
console.log(ayudanteDeSantaA.patas);
console.log(ayudanteDeSantaA.ladrar());


// Clases (objetos no literales)
class Perro {
    constructor(raza, color, nombre, temperamento){
    this.raza = raza;
    this.color = color;
    this.nombre = nombre;
    this.temperamento = temperamento;
    }

    //Metodos
    ladrar(){
      console.log('Wuff');
    }
} 

//Creando un objeto de la clase Perro.
const ayudanteDeSanta = new Perro('Galgo', 'marron', 'ayudante de Santa', 'manso');
const satanas = new Perro('corgi','rojo', 'Satanas', 'cagon');

console.log(ayudanteDeSanta);
console.log(ayudanteDeSanta.ladrar());
console.log(satanas);

