let temperatura = prompt("Ingrese la temperatura en grados Celsius:");

// Comprobar que la temperatura ingresada es un número
while (isNaN(parseFloat(temperatura))) {
  alert("El valor ingresado no es un número. Intente nuevamente.");
  temperatura = prompt("Ingrese la temperatura en grados Celsius:");
}

let tempNum = parseFloat(temperatura);
let kelvin = tempNum + 273.15;
let fahrenheit = (tempNum * 1.8) + 32;

console.log("Grados Kelvin: " + kelvin.toFixed(2));
console.log("Grados Fahrenheit: " + fahrenheit.toFixed(0));
