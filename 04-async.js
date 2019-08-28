// Async
console.log("--------------");
console.log("a");
console.log("b");

// Notacion de funcion flecha (arrow-function): () => {}
setTimeout(() => {
  console.log("c");
}, 8000);

console.log("d");
console.log("e");

// Ejercicios

// Notacion de funcion flecha (arrow-function): (parametros) => {}

var funcionFlecha = pametro => {
  console.log(`El valor del parametro: ${pametro}`);
};

var otrafuncionFlecha = () => {
  console.log(`Otra funcion flecha`);
};

var callbackFunction = () => {
  console.log("Esta funcion sera llamada en un callback");
};

function mostrarCallBackFunction(callback) {
  console.log("Dentro de esta funcion");
  callback();
}

mostrarCallBackFunction(callbackFunction);
mostrarCallBackFunction(otrafuncionFlecha);

var funcionMensaje = parametro => {
  console.log(`Aqui se imprime el parametro del callback : ${parametro}`);
};

var printMensaje = (mensajeParameter, callbackParameter) => {
  callbackParameter(mensajeParameter);
};

console.log("\n----------------------------");

funcionMensaje("cccccc88");
printMensaje("abc123", funcionMensaje);

var suma = (num1, num2) => {
  return num1 + num2;
};

var resta = (num1, num2) => {
  return num1 - num2;
};

var concatenar = (var1, var2) => {
  return `Los parametros son: ${var1} y ${var2}`;
};

var operacion = (num1, num2, operacionParameter) => {
    console.log('toy aqui');
  return operacionParameter(num1, num2);
};

console.log(operacion(2, 3, suma));
console.log(operacion(2, 3, resta));
console.log(operacion(2, 3, concatenar));
