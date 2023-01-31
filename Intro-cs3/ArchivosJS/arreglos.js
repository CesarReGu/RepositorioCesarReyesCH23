let miArreglo = []; //Declaracion literal de un arreglo
let miArreglo2 = new Array(); //Declaracion por instancia

//Arreglo 3, normal numeros
let miArreglo3 = [21,32,43,54]; // Arreglos con numeros
console.log("Dato del arreglo en el indice 0: " +miArreglo3[0]); // Para imprimir en el indice 0
console.log("Dato del arreglo en el indice 1: " +miArreglo3[1]); // Para imprimir en el indice 1
console.log("Dato del arreglo en el indice 2: " +miArreglo3[2]); // Para imprimir en el indice 2
console.log("Dato del arreglo en el indice 3: " +miArreglo3[3]); // Para imprimir en el indice 3
console.log("Tamaño del arreglo 3: " + miArreglo3.length); // Funcion para tamaño de un arreglo

//Arreglo 4, normal texto

let miArreglo4 = ["Hola","Que","Tal"]; // Arreglo pero con strings
console.log("Dato del arreglo en el indice 0: " +miArreglo4[0]); // Para imprimir en el indice 0
console.log("Dato del arreglo en el indice 1: " +miArreglo4[1]); // Para imprimir en el indice 1
console.log("Dato del arreglo en el indice 2: " +miArreglo4[2]); // Para imprimir en el indice 2
console.log("Tamaño del arreglo 4: " + miArreglo4.length); // Funcion para tamaño de un arreglo


//arreglo 5, objetos

let miArreglo5 = [{nombre:"Cesar"},{apellido:"Reyes"},{edad:26},{nombre:"Felipe"}]// Arreglo pero con objetos
console.log("Elemento del arreglo de tipo objeto " + miArreglo5[0]["nombre"]); // Imprimir elemento de un objeto
console.log("Elemento del arreglo de tipo objeto " + miArreglo5[1]["apellido"]); // Imprimir elemento de un objeto
console.log("Elemento del arreglo de tipo objeto " + miArreglo5[2]["edad"]); // Imprimir elemento de un objeto
console.log("Tamaño del arreglo 5: " + miArreglo5.length); // Funcion para tamaño de un arreglo

// ordenar datos en arreglo

let miArreglo6 = [3,6,1,4];
console.log("Orden de mi arreglo de menor a mayor: " + miArreglo6.sort()); // sort nos permite ordenar de menor a mayor
console.log("Elimine este dato del arrray : " + miArreglo6.pop()); // remueve el ultimo elemento y lo muestra, lo remueve del arreglo
console.log("Agregue el siguiente numero: " + miArreglo6.push(10)); // Agregar el numero 10
console.log("Orden de mi arreglo de mayor a menor : " + miArreglo6.reverse()); // reverse nos permite ordenar de mayor a menor

// ordenar strings en arreglo, lo hace por Abecedario

let miArreglo7 = ["hola","bye","adiosamor","mevoyparasiempre"];
console.log("Orden de mi arreglo de menor a mayor: " + miArreglo7.sort()); // sort nos permite ordenar de menor a mayor
console.log("Elimine este dato del arrray : " + miArreglo7.pop()); // remueve el ultimo elemento y lo muestra, lo remueve del arreglo
console.log("Agregue el siguiente numero: " + miArreglo7.push("queonda")); // Agregar el numero 10
console.log("Orden de mi arreglo de mayor a menor : " + miArreglo7.reverse()); // reverse nos permite ordenar de mayor a menor

//arreglo pero de string
console.log("javascript"[2]);
console.log("javascript".length)


// matriz

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log("Tamaño de la matriz: " + matriz.length);
console.log("Elemento de la matriz indice " + matriz[2][1]); // Imprimir elemento de un objeto
