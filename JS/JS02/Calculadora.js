// Pedimos al usuario que ingrese dos números
let a = parseInt(prompt("Introduce el primer número: "));
let b = parseInt(prompt("Introduce el segundo número: "));

// Pedimos al usuario que seleccione una operación
let c = parseInt(prompt("1 = Suma, 2 = Resta, 3 = Multiplicación, 4 = División: "));

// La función calculadora determina qué operación se debe realizar
function calculador() {
    switch (c) {
        case 1:
            sumar(a, b);
            break;
        case 2:
            restar(a, b);
            break;
        case 3:
            multiplicar(a, b);
            break;
        case 4:
            dividir(a, b);
            break;
        default:
            // Si el usuario no ingresa una opción válida, se llama de nuevo a la función
            calculador();
            break;
    }
}

// Función que suma dos números
function sumar(a, b) {
    let resultadosumar = (a + b);
    console.log("Tu suma es: " + resultadosumar);
}

// Función que resta dos números
function restar(a, b) {
    let resultadorestar = (a - b);
    console.log("Tu resta es: " + resultadorestar);
}

// Función que multiplica dos números
function multiplicar(a, b) {
    let resultadomultiplicar = (a * b);
    console.log("Tu multiplicación es: " + resultadomultiplicar);
}

// Función que divide dos números
function dividir(a, b) {
    let resultadodividir = (a / b);
    console.log("Tu división es: " + resultadodividir);
}

calculador(); //llamamos a la funcion calculadora

/*  - Por que son importantes las funciones?
    1. Nos permite reutilizar codigo en lugar de escribirlo varias veces. Podemos llamar nuestra funcion en distintos lugares de nuestro programa, y así lo usamos cuando lo necesitamos sin necesidad de escribirlo de nuevo.
    2. Nos permite modularizar nuestro codigo, esto es, dividir nuestra aplicacion en partes mas pequeñas e independientes. Así mejoramos el entendimiento y comprensión del código.
    3. Mantienen su propio espacio, y las variable que se encuentran dentro de una funcion no se pueden acceder fuera de ella (scope).
    4. Por que podemos probar pequeñas partes de nuestro programa de forma aislada. (Debugging) 
    
    - El alcance (en inglés, scope) es el conjunto de reglas que determina la disponibilidad y
    accesibilidad de las variables en un programa. En otras palabras, el alcance es el ámbito en
    el que una variable está definida y puede ser utilizada.
    
    - En programación, existen dos tipos principales de alcance: alcance global y alcance de función. Las variables declaradas fuera de 
    cualquier función tienen alcance global y están disponibles en todo el programa. Las variables declaradas dentro de una función 
    tienen alcance de función y sólo están disponibles dentro de esa función.
    
    - El hoisting es un concepto relacionado con el alcance de las variables en JavaScript. Se refiere a la capacidad de JavaScript
    de "levantar" la declaración de una variable al comienzo de su ámbito, independientemente de donde esté escrita en el código.
    Esto significa que, en JavaScript, las declaraciones de variables se comportan como si estuvieran escritas al comienzo de su ámbito, 
    independientemente de donde estén realmente escritas en el código. Esto puede llevar a comportamientos inesperados si no se tiene en cuenta al escribir código.
    
    - En programación, existen cuatro tipos principales de funciones:

    1. Funciones normales: Son funciones que se declaran con un nombre específico y que se pueden llamar mediante ese nombre en cualquier parte del programa.

    2. Funciones anónimas: Son funciones que no tienen un nombre y se utilizan a menudo como argumentos para otras funciones o como valores de retorno.

    3. Funciones arrow: Son una forma especial de escribir funciones anónimas en JavaScript y son también conocidas como funciones de flecha. 
    Tienen una sintaxis más concisa que las funciones normales y comparten el mismo alcance de las variables que la función que las contiene.

    4. Funciones constructoras: Son funciones que se utilizan para crear objetos. Se invocan con la palabra clave "new" y tienen un comportamiento
     especial que permite crear objetos con propiedades y métodos personalizados.
     
     */