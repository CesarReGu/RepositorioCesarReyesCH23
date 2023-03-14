let num = parseInt(prompt("Introduce un número:"));
// Comprobar que el dato ingresado es un número
while (isNaN(num)) {
  num = parseInt(prompt("El valor introducido no es un número, vuelve a intentarlo:"));
}

let factorial = 1;

//El factorial de un numero es ese numero multiplicado por todos los numeros anteriores a el, por eso usamos un for
for (let i = num; i > 0; i--) {
  factorial *= i;
}

console.log(`El factorial de ${num} es ${factorial}.`);
