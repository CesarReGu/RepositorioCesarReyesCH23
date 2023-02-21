// Define la clase Persona
class Persona {
    // Constructor de la clase que acepta nombre y apellido
    constructor(nombre, apellido) {
        // Asigna el nombre y el apellido a las propiedades correspondientes
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Setter para la propiedad nombre
    set nombre(nombre) {
        // Asigna el nombre a la propiedad _nombre (con un guión bajo antes del nombre)
        this._nombre = nombre;
    }

    // Getter para la propiedad nombre
    get nombre() {
        // Devuelve el valor de la propiedad _nombre
        return this._nombre;
    }
    nombreCompleto(){
        return this._nombre + " " + this.apellido;
    }
}

// Crea una nueva instancia de la clase Persona con nombre "Juan" y apellido "Perez"
let persona1 = new Persona("Juan", "Perez");

// Crea una nueva instancia de la clase Persona con nombre "Cesar" y apellido "Reyes"
let persona2 = new Persona("Cesar", "Reyes");

// Muestra la instancia persona2 en la consola
console.log(persona2);

// Muestra el nombre de persona1 en la consola
console.log(persona1.nombre);

// Muestra el apellido de persona1 en la consola
console.log(persona1.apellido);

// Crea una nueva instancia de la clase Persona con nombre "Jhonny" y apellido "Deep"
let persona3 = new Persona("Jhonny", "Deep");

// Define la clase Persona, que hereda de Persona

class Empleado extends Persona{
    // Constructor de la clase que acepta departamento
    constructor(nombre,apellido,departamento) {
        super(nombre,apellido);
        this.departamento = departamento;
    }
    // Setter para la propiedad nombre
    set departamento(departamento) {
        // Asigna el nombre a la propiedad _departamento (con un guión bajo antes del nombre)
        this._departamento = departamento;
    }

    // Getter para la propiedad nombre
    get departamento() {
        // Devuelve el valor de la propiedad _departamento
        return this._departamento
    }
    // Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + " " + this._departamento;
    }
}

let empleado1 = new Empleado("Maria","Perez","Sistemas");
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());