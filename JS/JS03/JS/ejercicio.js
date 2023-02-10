let diaNumero = parseInt(prompt("Da un numero del 0 al 6"));

switch (diaNumero) {
    case 0:
        document.write("<h2>Hoy es domingo<h2>"); break;
    case 1:
        document.write("<h2>Hoy es lunes<h2>"); break;
    case 2:
        document.write("<h2>Hoy es martes<h2>"); break;
    case 3:
        document.write("<h2>Hoy es miercoles<h2>"); break;
    case 4:
        document.write("<h2>Hoy es jueves<h2>"); break;
    case 5:
        document.write("<h2>Hoy es viernes<h2>"); break;
    case 6:
        document.write("<h2>Hoy es sabado<h2>"); break;
    default:
        document.write("<h2>Introdujiste un numero incorrecto<h2>"); break;
}

let q = false;
let p = false;

if (!(!q || p)){console.log("true");}