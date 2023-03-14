let num = NaN;

//Bucle por si no se da un numero entero
while (isNaN(num)) {
  num = parseInt(prompt("Ingrese un número entero positivo"));
}

let fibonacci = [0, 1]; // arreglo que almacena los primeros dos números de la serie de Fibonacci

//La suma fibonacci es aquella que cada numero en ella es igual a la suma de los dos anteriores, usamos ciclo for para esto
for (let i = 2; i < num; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);
