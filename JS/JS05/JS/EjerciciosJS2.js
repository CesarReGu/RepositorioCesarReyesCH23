//Problema 1

/* if (GPAacumulativo >2.0){
if (Unidadestotales >= 120){
console.log("¡Puede graduarse!");
}
}

if(cspCalificacion >= 75){
console.log("Eres elegible para la graduación!");
}
if (progCalificación >= 75){
console.log("Eres elegible para la graduación!");


 */
let GPAacumulativo = 20;
let Unidadestotales = 130;
let cspCalificacion = 20;
let progCalificacion = 80;

if (GPAacumulativo > 2.0 && Unidadestotales >= 120) { // Combinamos las condiciones del GPA acumulativo y unidades totales requeridas en una sola línea utilizando el operador "&&".
    console.log("¡Puede graduarse!");
    } else if (cspCalificacion >= 75 || progCalificacion >= 75) { // Si las condiciones anteriores no se cumplen, verificamos si el estudiante cumple con al menos una de las condiciones de cspCalificación o progCalificación.
    console.log("Eres elegible para la graduación!");
    }

//Problema 2

let texto = "Hola Mundo";
let textoModificado = ''; // Variable vacía llamada que almacenará la cadena de texto con puntos entre cada letra.
let caracteres = texto.split(''); // Se llama al método "split" en la cadena de texto original, que devuelve un arreglo de caracteres.

for (let i = 0; i < caracteres.length; i++) {
  textoModificado += caracteres[i] + '.'; // En cada iteración, se concatena la letra actual y un punto a la cadena "textoModificado".
}


console.log(textoModificado); // Se imprime el resultado en la consola
