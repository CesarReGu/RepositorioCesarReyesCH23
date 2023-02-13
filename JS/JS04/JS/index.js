let miVariable = 5;
let miArray = [2,3,4,5,6,7];
//let miArray = new Array();

let miArray1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let MatrizR = [
    [],[],[]
]

console.log("miArray"+ miArray[0]);
console.log("miArray"+ miArray[1]);

console.log(miArray1[0][1]);
console.log(miArray1[0][2]);
console.log(miArray1[2][1]);

console.log("todo el indice 0 " +miArray1[0]);
console.log("todo el indice 1 " +miArray1[1]);
console.log("todo el indice 2 " +miArray1[2]);

for(let i = 0;i<=5;i++){
    console.log("imprimiendo miArray -> " +miArray[i]);
}



for (let i = 0; i < miArray1.length; i++) {
    for (let j = 0; j < miArray1[i].length; j++) {
        console.log("Imprimiendo MiArray con for anidado: " +miArray1[i][j]);
    }
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        MatrizR[i][j] = miArray1[i][j] * miArray1[i][j]
    }
}

console.log("MatrizR "+MatrizR)

/*WHLE*/

let contador = 0;
while(contador < 10){
    console.log(contador);
    contador++;
}