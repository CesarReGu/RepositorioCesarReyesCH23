//INICIO EJERCICIO 1

// Parte 1: Declaracion de la lista original
let Nombres = ["Maria", "Antony", "Joy", "Juan"];
console.log(Nombres);

//Funcion que tome un nombre y lo añada al final de la lista
function NuevoNombre(Nombre){
    Nombres.push(Nombre)
}

NuevoNombre("Cesar"); // Añado mi propio nombre a la lista con la funcion
console.log(Nombres);

// Parte 2: Funcion que comprueba si un nombre está dentro de nuestra lista

function NombreExiste(Nombre, Nombres) {
    return Nombres.includes(Nombre);
  }
  
  let PrimerNombre = NombreExiste("Joy",Nombres); //Devuelve true
  let SegundoNombre = NombreExiste("Felipe",Nombres); //Devuelve False

  console.log(PrimerNombre);
  console.log(SegundoNombre);

// Parte 3: Funcion que compara dos listas

function CompararNombres(Nombres1, Nombres2) {
    let Resultados = []; // Array vacío para almacenar los nombres comunes
    for (var i = 0; i < Nombres1.length; i++) { 
      if (Nombres2.includes(Nombres1[i])) { // Verifica si el nombre actual está en la segunda lista de nombres
        Resultados.push(Nombres1[i]); // Si el nombre está en ambas listas, agrégalo al array de resultados
      }
    }
    return Resultados; // Devuelve el array de resultados que contiene los nombres comunes
  }

  let Nombres2 = ["Maria", "Jose", "Elon", "Cesar"]; // Nueva lista para comparar
  let NombresIguales = CompararNombres(Nombres, Nombres2); //Comparamos las listas con la funcion y la almacenamos
  console.log(NombresIguales);
  
  // Parte 4:

  function ObtenerLongitudes(Nombres) { 
    let Longitudes = []; // Array vacío para almacenar las longitudes de los nombres
    for (var i = 0; i < Nombres.length; i++) { 
      Longitudes.push(Nombres[i].length); // Agrega la longitud del nombre actual al array de longitudes
    }
    return Longitudes; // Devuelve el array de longitudes
  }
  
  let ImprimirTamano = ObtenerLongitudes(Nombres); //  Lllamamos a la funcion y la almacenamos en la variable
  console.log(ImprimirTamano);

  //FIN DE EJERCICIO 1

  //INICIO EJERCICIO 2

false || (true && false); // retorna "false" porque "true && false" es "false", y "false || false" es "false"

true || (11 + 12); // retorna "true" porque "true || (11 + 12)" es "true"

(31 + 22) || true; // retorna "53" porque "(31 + 22) || true" es "53", y "53" es considerado "truthy" en JavaScript

true && (1 + 7); // retorna "8" porque "true && (1 + 7)" es "8", y "8" es considerado "truthy" en JavaScript

false && (3 + 4); // retorna "false" porque "false && (3 + 4)" es "false"

(1 + 2) && true; // retorna "true" porque "(1 + 2) && true" es "true"

(32 * 4) >= 129; // retorna "true" porque "(32 * 4) >= 129" es "true"

false !== !true; // retorna "false" porque "false !== !true" es equivalente a "false !== false", lo cual es "false"

true === 4; // retorna "false" porque "true" es un booleano y "4" es un número, por lo que no son iguales en tipo ni en valor

false === (847 === '847'); // retorna "true" porque "847" es una cadena de caracteres, no un número, y por lo tanto, "847 === '847'" es "false", lo cual hace que toda la expresión sea "true === false", lo cual es "false"

false === (887 == '887'); // retorna "true" porque "887" es convertido a un número durante la comparación con "887", por lo tanto, "887 == '887'" es "true", lo cual hace que toda la expresión sea "false === true", lo cual es "false"

(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // retorna "true" porque "(!true || (!(100 / 5) === 20) || ((328 / 4) === 82))" es "true", y "true || false" es "true"


// FIN EJERCICIO 2

// INICIO EJERCICIO 3

function RangoNumerico(Numero) {
    // Comprobar si el número está entre 0 y 25 (ambos incluidos)
    if (Numero >= 0 && Numero <= 25) {
      console.log(Numero + ' está entre 0 y 25');
    } 
    // Comprobar si el número está entre 26 y 100 (ambos incluidos)
    else if (Numero >= 26 && Numero <= 100) {
      console.log(Numero + ' está entre 26 y 100');
    } 
    // Comprobar si el número es mayor que 100
    else if (Numero > 100) {
      console.log(Numero + ' es mayor que 100');
    } 
    // Comprobar si el número es menor que 0
    else if (Numero < 0) {
      console.log(Numero + ' es menor que 0');
    }
  }
  
  let NumeroMen = RangoNumerico(34);
  console.log(NumeroMen);

  // FIN EJERCICIO 3

  // INICIO EJERCICIO 4
  
var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;

console.log(f);

// Devuelve 4, ya que || regresa el primer valor verdadero que encuentra, a,b,c son falsos, así que devuelve 4.


// FIN EJERCICIO 4