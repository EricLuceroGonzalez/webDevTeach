const callback = () => {
    console.log('Llamando a mi callback');
  }

const imprimeBla = () => {
    console.log('Bla Bla bla!');
    
}  
  
  function otraFuncion(callback) {
    console.log('Ejecutando otra funcion');
    callback();
  }
  
  otraFuncion(callback);
  otraFuncion(imprimeBla);
//   //Funcion anonima que funciona como callback
//   function otraFuncionAnonima( 
//       () => {
//     console.log('Llamando a un callback anonimo');
//   });

const stations = [{id: 1, name: "Pardo"}, {id: 2, name: "Benavides"}];
// Map, reduce y Filter son clasicos ejemplos de callback,
// donde se delega la lógica detrás del map a una función externa haciéndo 
// reutilizable el código 
const stationNames = stations.map((station) => { 
  return station.name;
});

console.log(stationNames );
