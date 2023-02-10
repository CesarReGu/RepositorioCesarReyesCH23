
// Preguntar al usuario por el número de horas trabajadas
let horasTrabajadas = parseInt(prompt("¿Cuántas horas trabajó?"));

// Preguntar al usuario por el costo por hora
let costoPorHora = parseFloat(prompt("¿Cuál es su costo por hora?"));

// Calcular la paga total multiplicando horas trabajadas por costo por hora
let paga = horasTrabajadas * costoPorHora;

// Mostrar la paga total en la consola, redondeada a dos decimales
console.log("Su paga total es de $" + paga.toFixed(2));



//Segundo problema

let numerador = (3 + 2);
let denominador = (2 * 5);
let resultado = numerador / denominador;

console.log(resultado);




//Tercer problema


// Pidiendo el peso en libras y la estatura en centímetros al usuario
let pesoLibras = prompt("Ingresa tu peso en libras:");
let estaturaCentimetros = prompt("Ingresa tu estatura en centímetros:");

// Convertir el peso a kilogramos
let pesoKilogramos = pesoLibras * 0.453592;

// Convertir la estatura a metros
let estaturaMetros = estaturaCentimetros / 100;

// Calcular el IMC
let imc = pesoKilogramos / (estaturaMetros * estaturaMetros);

// Mostrar el peso en kilogramos y el IMC en la consola
console.log(`Peso en kilogramos: ${pesoKilogramos}`);
console.log(`IMC: ${imc}`);

// Clasificar y mostrar la categoría de IMC según la OMS de la ONU
if (imc < 16) {
  console.log("Criterio de ingreso");
} else if (imc >= 16 && imc <= 16.9) {
  console.log("Infrapeso");
} else if (imc >= 17 && imc <= 18.4) {
  console.log("Bajo peso");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
  console.log("Sobrepeso");
} else if (imc >= 30 && imc <= 34.9) {
  console.log("Obesidad premórbida");
} else if (imc >= 35 && imc <= 45) {
  console.log("Obesidad mórbida");
} else if (imc > 45) {
  console.log("Obesidad hipermórbida");
}
