let dia = Number(prompt("Intruce un dia de la semana: "));

switch(dia){
    case 1:
        document.write("<h2>Lunes<h2>"); break;
    case 2:
        document.write("<h2>Martes<h2>"); break;
    case 3:
        document.write("<h2>Miercoles<h2>"); break;
    case 4:
        document.write("<h2>Jueves<h2>"); break;
    case 5:
        document.write("<h2>Viernes<h2>"); break;
    case 6:
        document.write("<h2>Sabado<h2>"); break;
    case 7:
        document.write("<h2>Domingo<h2>"); break;
    default:
        document.write("<h2>Dia no valido<h2>"); break;
}
