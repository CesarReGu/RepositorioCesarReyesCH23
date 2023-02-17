/*
Que encontramos en el arbol del DOM?

- Node: Es la unidad más básica dentro del documento. Puede ser una etiqueta, un
texto dentro de una etiqueta o un comentario, etc.

<title> NODO
    Manipulacioón DOM // Es nodo, pero es hijo del title
</title>

- Document: También es un nodo, del tipo documento, es el nodo raiz a partir del cual se 
desarrollan o generan todos los demás nods.

- Element: Son todos aquellos definidos por etiquetas <div>, <img>, <h1>, etc.

- Attributes: Nodos que dan información asociada al tipo de etiqueta/elemento

- Comentario: Comentarios y otros elementos que están dentro del HTML

Como leer nodos de mi DOM

Metodos tradicionales (que se usan en versiones antiguas de JS)

    - document.getElementById (botonSuma)
    - document.getElementByTagName <button>
    - document.getElementByClassName (botones)

*/

var elementoID = document.getElementById("botonSuma");
console.log(elementoID);

var elementoEtiqueta = document.getElementsByTagName("button");
console.log(elementoEtiqueta);
console.log("Este es el primer elemento de mi coleccion de botones", elementoEtiqueta[0]);

var elementoClassName = document.getElementsByClassName("botones");
console.log(elementoClassName);

/*
Metodos recientes

    - document.querySelector(#botonsuma)
    - document.querySelectorALL (.botones)

*/
/*
var unElemento = document.querySelector("#input1");
console.log(unElemento);

var variosElementos = document.querySelectorAll(".botones");
console.log(variosElementos);
*/
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

var botonSuma = document.getElementById("botonSuma");
var botonResta = document.getElementById("botonResta");
var botonMultiplicacion = document.getElementById("botonMultiplicacion");
var botonDivision = document.getElementById("botonDivision");

var resultado = document.getElementById("resultado");

//Creacion de una etiqueta del tipo imagen
var imagenPerrito = document.createElement("img");

//Creamos atributos a la etiqueta
imagenPerrito.src = "https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg";
imagenPerrito.alt = "Foto de perrito tierno"
imagenPerrito.style.width = "150px";
imagenPerrito.style.borderRadius= "100px"

var textoPerrito = document.createElement("p");
textoPerrito = "Este es mi perrito";

//Poner elementos o nodos en el html
document.body.append(imagenPerrito);

/*
Actualizar nodos
1er Paso: Identificar el nodo que quiero cambiar (outer)
2do paso: Modificar el nodo (inner)
Identificar el nodo con un metodo para tomarlo (getElement o QuerySelector y modificarlo con inner.HTML)
*/

var resultadoQueCambia = document.getElementById("resultado");
resultadoQueCambia.innerHTML = "Saludos, cambie el texto juas juas";
