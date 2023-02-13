let lista = [12,5,80,34,7];
lista.sort(
    function(valor1,valor2){
        return valor1 > valor2
    }

);
console.log(lista);





lista.sort();
console.log(lista);

lista.reverse();
console.log(lista);








let remover = lista.splice (1,2);
console.log(remover);
console.log(lista);
lista.splica(2,0,100,200,300);
console.log(lista);


lista.shift();
console.log(lista);


lista.pop();
console.log(lista);

lista.push(100,89,90);
console.log(lista);



//let listaNueva = lista.slice(1,4);
//let masE = lista.concat(100,200,300);
// console.log(masE);

//console.log(listaNueva);



//console.log (lista.length)
/*
for (let i=0; i<lista.length;i++){
    console.log("-->"+lista[i]);
}

console.log(lista);
*/
