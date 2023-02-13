
//Problema 1
let nombre = ["sofia", "david", "juan"];
let nombre2 = ["david", "juan", "sara", "agustin"]
let nombre3 = ["david"]


// Problema 2
for (let i = 1; i <= 5; i++) { //bucle exterior itera 5 veces, empezando desde 1
    let asterisco = ''; //cadena vacía para almacenar cada fila de asteriscos
    for (let j = 1; j <= i; j++) { //el bucle interior itera 'i' veces, empezando desde 1
        asterisco += '* '; //agrega un asterisco seguido de un espacio a la cadena de la fila
    }
    console.log(asterisco); // imprime la cadena de la fila en una nueva línea
}


// Problema 3

// 1

let xValue = 10;
while (xValue > 0) {
    console.log(xValue);
    xValue -= 0.5;
}

// 2

let numeroImpar = 1;
while (numeroImpar <= 100) {
    console.log(numeroImpar);
    numeroImpar += 2;
}
//3
let n = 6;

function ImprimeNumeros() {
    let i = 1;
    while (i <= 5) {
        console.log(`[${i}]`); //Ponemos $ para dar a entender que i es una variable, no un string.
        i++;
    }
}
console.log(ImprimeNumeros()); // Imprimir el resultado

// 4 
function sumaDeLosPrimeros5EnterosPositivos() {
    let suma = 0; // Declarar la variable suma y establecer su valor inicial en 0
    let i = 1;  // Declarar la variable i y establecer su valor inicial en 1
    while (i <= 19) {
        suma += i; // Agregar el valor actual de i a la variable suma
        i++;
    }
    return suma; // Devolver el valor de suma al final del bucle
}

console.log(sumaDeLosPrimeros5EnterosPositivos()); // Imprimir el resultado
