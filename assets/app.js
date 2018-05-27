// js viejo
function add(num1, num2) {
  // puedes hacer let antes del return pero solo vive en la funcion
  return num1 + num2;
}
// num1 y num2 en una funcion es distinto a las var porque son solo utiles alli
function multiply(num1, num2) {
  return num1 * num2;
}
// js nuevo
// const add = (num1, num2) => num1 + num2;
// const multiply = (num1,num2) => num1 * num2;
// es como el return =>

//ahora voy a otorgar valor a los parámetros
let num1= 9824;
let num2 = 777;
let num3 = 36325; 
// la funcion se llama con el nombre de la funcion mas los parametros
let resultsAdd = add(num1,num2);
let resultsMultiply= multiply(resultsAdd,num3);
alert("El resultado de 36325 * (9824 + 777) es "+ resultsMultiply)