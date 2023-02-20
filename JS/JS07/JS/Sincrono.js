/* alert("Cohorte 23");
console.log("Hola. Buen día");
alert("Día del gatito");
console.log("Adios");

setTimeout(

    function(){
        console.log("Hola mundo con retrado");
    },1000
) */

const myCollback = () => console.log("Hola mundo con retraso");
setTimeout(myCollback);
console.log("sorpresa");