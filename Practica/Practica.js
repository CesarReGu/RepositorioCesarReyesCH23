/*En este reto reforzarás tus conocimientos en JavaScript, creando funciones, trabajando con arreglos y strings, y manipulando del DOM para mostrar los resultados al usuario.

1.- Construye una función que reciba por parámetros un string y un array de strings. La función debe retornar un arreglo de strings con los strings que sean de mayor 
longitud que el string recibido por parámetros.

Escribe una función que reciba 2 parámetros
Parámetro 1 - Un string
Parámetro 2 - Un array de strings
La función debe devolver todas las palabras del array de entrada (parámetro 2) que sean más largas que el string de entrada (parámetro 1)
Ejemplo:
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
bigWords('bocina', myArray);
Output - ['insecto', 'bootcamp', 'escritorio'] */


function palabrasMasLargas(palabras, arreglo){
    //Filtra los elementos del arreglo que sean más largos que la palabra
    //Para cada elemento del arreglo, devuelve true si la longitud del elemento es mayor que la longitud de la variable palabras, de lo contrario devuelve false
    let palabrasFiltradas = arreglo.filter(elemento => elemento.length > palabras.length);
    return palabrasFiltradas;
  }
  
  function ImprimirHTML(arreglo) {
    let lista = document.createElement('ul');
    //Creamos tantas etiquetas li como elementos dentro del arreglo
    for (let i = 0; i < arreglo.length; i++) {
      let circulito = document.createElement('li');
      circulito.innerText = arreglo[i];
      lista.appendChild(circulito);
    }
    document.body.appendChild(lista);
  }
  
  let miArreglo = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
  let resultado = palabrasMasLargas('bocina',miArreglo);
  
  console.log(resultado);
  console.log(miArreglo);
  
  ImprimirHTML(resultado);
  