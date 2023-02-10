/*
if(condicion){
    Bloque de codigo
}
*/

let edad = parseInt(prompt("Dame tu edad homie"));

if(edad >= 18){
    document.write("<h2>Ya 'tas grandecito<h2>")
} else if(edad < 18){
    document.write("'<h2>Tas chikito<h2>")
} else{
    document.write("<h2>Ese no es un numero men<h2>")
}