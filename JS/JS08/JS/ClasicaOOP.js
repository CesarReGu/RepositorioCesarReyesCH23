// Definimos la clase OperacionesAritmeticas
class OperacionesAritmeticas{
    // Definimos las propiedades numero0 y numero1 con valores iniciales de cero
    numero0 = 0;
    numero1 = 0;
    
    // Definimos el constructor que recibe dos argumentos y los asigna a las propiedades correspondientes
    constructor(valor0,valor1){
        this.numero0 = valor0;
        this.numero1 = valor1;
    }

    // Definimos el método sumar que espera dos argumentos y devuelve su suma
    sumar(a,b){
        return a+b;
    }
}

// Creamos una instancia sin argumentos y llamamos al método sumar con argumentos proporcionados
let Obj2 = new OperacionesAritmeticas();
console.log(Obj2.sumar(12,5));

// Creamos una instancia sin argumentos y accedemos a la propiedad numero0
let Obj1 = new OperacionesAritmeticas();
console.log(Obj1.numero0);

// Creamos una instancia y asignamos valores a sus propiedades numero0 y numero1, y luego llamamos al método sumar con argumentos proporcionados
let Obj3 = new OperacionesAritmeticas();
Obj3.numero0 = 64;
Obj3.numero1 = 24;
console.log(Obj3.sumar(Obj3.numero0,Obj3.numero1));

// Creamos una instancia con argumentos proporcionados y llamamos al método sumar con argumentos proporcionados
let Obj4 = new OperacionesAritmeticas(8,6);
console.log("---> " + Obj4.sumar(Obj4.numero0,Obj4.numero1));

