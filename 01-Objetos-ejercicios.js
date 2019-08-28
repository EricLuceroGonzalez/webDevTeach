/*
                            Objetos Literales
-----------------------------------------------------------------------
1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
    https://en.wikipedia.org/wiki/List_of_fictional_penguins
    Crea un objeto llamado myPenguin con propiedades que representen
    la información listada en cada columna en esa página de wikipedia
    (por ejemplo: character, origin...)
-----------------------------------------------------------------------
*/
let elPingui = {
  character: "Tux",
  origin: "Linux",
  notes:
    "He is the mascot of the Linux kernel and appears in many other Linux programs,  usually in different styles. He has also appeared in his own video games, such as Tux Racer  Extreme Tux Racer, Tux Math Scrabble, TuxWordSmith, Tux Math, SuperTux, SuperTuxKart, and Tux Paint."
};

/*
-----------------------------------------------------------------------
2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
    de bienvenida. La salida debe ser algo como:
    "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"
-----------------------------------------------------------------------
*/
console.log("Hola, soy un pingüino y mi nombre es " + elPingui.character);

/*
-----------------------------------------------------------------------
3.- Escribe otra línea de código que añada una nueva propiedad a tu 
    pingüino llamada puedeVolar y asignalo a falso.
    Nota: No modifiques el código original donde definiste a tu pingüino
-----------------------------------------------------------------------
*/

elPingui.puedeVolar = false;

/*
-----------------------------------------------------------------------
4.- Añade un método a tu pingüino llamado 'graznar' que muestre en 
    consola: "kaww kaww!!"
    Nota: Sí, así suenan los pingüinos
    Nota de la Nota: No modifiques el código previo. Hazlo en una
    nueva línea de código.
-----------------------------------------------------------------------
*/

elPingui.graznar = function() {
  return "kaww kaww!!";
};

elPingui.graznar();
// console.log(elPingui);

/*
-----------------------------------------------------------------------
5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en
    consola el mismo mensaje que escribimos para la bienvenida.
    Esta vez, emplea la palabra reservada "this" para resolverlo.
-----------------------------------------------------------------------
*/

elPingui.saludar = function() {
  console.log("Hola soy un pinguino, y mi nombre es " + this.character);
};

/*
-----------------------------------------------------------------------
6.- Sin modificar el código previo, cambia el nombre del pingüino a 
    "Señor Pingu" y llama al método "saludar" para verificar que 
    se ha aplicado el cambio correctamente.
-----------------------------------------------------------------------
*/

elPingui.character = "Señor Pingu";
elPingui.saludar();

/*
-----------------------------------------------------------------------
7.- Escribe otro método llamado 'volar'. Con este método imprime en 
    consola el mensaje "¡Puedo volar!" si el pingüino tiene 'true' 
    en su atributo 'puedeVolar'. De lo contrario, muestra el mensaje
    "No puedo volar :("
-----------------------------------------------------------------------
*/

console.log(elPingui);

elPingui.volar = function() {
  console.log("dentro de la funcion Volar()");
  if (this.puedeVolar) {
    console.log("Puedo volar!");
  } else {
    console.log("No puedo volar :(");
  }
};

elPingui.volar();

/*
-----------------------------------------------------------------------
8.- Cambia la propiedad "puedeVolar" de tu pingüino a "true". Manda a 
    llamar el método 'volar' para verificar que el cambio se efectuó
    correctamente.
-----------------------------------------------------------------------
*/
elPingui.puedeVolar = true;
elPingui.volar();
/*
-------------------------------------------------------------
9.- Crea un objeto que contenga información de una receta 
    para preparar Mole. Debe contener las propiedades de
    título (string), porciones (numero) e ingredientes (un
    arreglo de strings). Muestra la información de la receta
    para que luzca así:
    
    Mole
    Porciones: 2
    Ingredientes:
    canela
    comino
    cocoa
-------------------------------------------------------------
*/
let receta = {
  titulo: "Mole",
  porciones: 4,
  ingredientes: ["canela", "comino", "cocoa", "cafe"]
};

console.log("----------");
console.log(receta.titulo);
console.log("Porciones: " + receta.porciones);
console.log("Ingredientes:");
// console.log(receta.ingredientes.join('\t') );
for (let i = 0; i < receta.ingredientes.length; i++) {
  console.log(receta.ingredientes[i]);
}

/*
-------------------------------------------------------------
10.- Crea un arreglo de objetos, donde cada objeto describa 
    un libro y tenga las propiedades para titulo(string),
    autor(string) y leido(booleano para indicar si se ha 
    leido o no). Itera sobre el arreglo de libros, y por 
    cada libro imprime el titulo y autor, junto con su 
    status de lectura (si ya ha sido leído, o no).
-------------------------------------------------------------
*/
let libros = [
  {
    titulo: "Rayuela",
    autor: "Julio Cortazar",
    leido: true
  },
  {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    leido: true
  },
  { titulo: "You Dont Know Javascript", autor: "Kyle Simpson", leido: false }
];

for (let i = 0; i < libros.length; i++) {
  console.log("i = " + i);
  console.log("Titulo: " + libros[i].titulo + "; Autor: " + libros[i].autor);
  console.log("Leido: " + libros[i].leido);
}

/*
                            Objetos
-----------------------------------------------------------------------
11.- Haz una clase llamada Persona que siga las siguientes condiciones:
	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
	 calcularIMC()
	 esMayorDeEdad()
	 El constructor pide nombre, edad,sexo,peso y altura
-----------------------------------------------------------------------
*/

class Persona {
  constructor(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
  }
  //Metodo para Calcular IMC
  calcularIMC() {
    const imc = this.peso / (this.altura * this.altura);
    return imc;
  }
  // Metodo para verificar mayor de edad (>18)
  mayorDeEdad() {
    if (this.edad >= 18) {
      return "Es mayor de edad";
    } else {
      return "Es menor de edad";
    }
  }
}
let eric = new Persona("Eric", 30, "Masculino", 65, 1.7);
let andrea = new Persona("Andrea", 25, "Femenina", 60, 1.6);

console.log(eric);
console.log(andrea);
/* Ahora sí, tras ejecutar el método "obtenerRFC()", podemos mostrar
   en consola el atributo. Es decir, el atributo ahora existe.
*/

/*
-----------------------------------------------------------------------
12.- Crear una clase Cuenta que tenga los siguientes atributos y metodos:
	 -Titular y cantidad
	 -ingresar(cantidad)
	 -retirar(cantidad)
	 Hacer las validaciones previas
	 Como regla de negocio no debe de tener más de $900 y menos de $10
-----------------------------------------------------------------------
*/
class Cuenta {
  constructor(titular, cantidad) {
    this.titular = titular;
    this.cantidad = cantidad;
  }
  // Calcula el ingreso tomando en cuenta la restriccion
  ingresar(ingreso) {
    console.log("ingresar()");
    if (this.cantidad + ingreso > 900) {
      return "El ingreso excede el limite maximo";
    } else {
      this.cantidad = this.cantidad + ingreso;
      return "Ahora el saldo es " + this.cantidad;
    }
  }

  retirar(retiro) {
    if (this.cantidad - retiro < 10) {
      return "El retiro excede el limite minimo";
    } else {
      this.cantidad = this.cantidad - retiro;
      return (
        "Has retirado: " + retiro + "; Ahora el saldo es: " + this.cantidad
      );
    }
  }
}

let alberto = new Cuenta("Alberto", 100);
let andreA = new Cuenta("Andrea", 850)
console.log(alberto);
console.log(andreA);

console.log(alberto.ingresar(600));
console.log(alberto);
console.log(alberto.ingresar(300));

let input = document.body.getElementsByClassName('elInput');
