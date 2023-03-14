// Clase para el juego de adivinar número
class JuegoAdivinarNumero {
    // Constructor para inicializar las propiedades del juego
    constructor() {
  
      this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
      this.numeroSolicitado = false;
  
    }
  
    // Método para comprobar si un valor es un número
    esNumero(valor) {
      return !isNaN(parseFloat(valor)) && isFinite(valor);
    }
  
    // Método para solicitar un número al usuario
    pedirNumero() {
      // Comprueba si el número ya ha sido solicitado
      if (!this.numeroSolicitado) {
        this.numeroSolicitado = true;
  
        let numero = prompt("Introduce un número del 1 al 100:");
        
        // Mientras el valor introducido no sea un número o no esté entre 1 y 100, sigue solicitando un número
        while (!this.esNumero(numero) || numero < 1 || numero > 100) {
          alert("Debe introducir un número del 1 al 100.");
          numero = prompt("Introduce un número del 1 al 100:");
        }
  
        // Devuelve el número introducido por el usuario como un entero
        return parseInt(numero);
      } else {
    
        return null;
      }
    }
  
    // Método para comprobar si el número introducido por el usuario es correcto o no
    comprobarNumero(numero) {
      if (numero === this.numeroSecreto) { // Si el número es correcto, se imprime un mensaje de felicitación y se muestran los números introducidos
        console.log("Felicidades, adivinaste el número secreto.");
      } else { // Si el número es incorrecto, se imprime un mensaje de error y se vuelva a solicitar un número
        console.log("El número secreto es incorrecto, vuelve a intentarlo.");
        console.log("El numero secreto era: " +this.numeroSecreto);
        // Se vuelve a llamar al método para solicitar un nuevo número
        this.jugar();
      }
    }
  
    // Método para comenzar el juego
    jugar() {
      // Se solicita un número al usuario
      let numero = this.pedirNumero();
      // Si el número es válido, se comprueba si es correcto
      if (numero !== null) {
        this.comprobarNumero(numero);
      }
    }
  }
  
  // Se crea una instancia de la clase JuegoAdivinarNumero
  let juego = new JuegoAdivinarNumero();
  // Se llama al método jugar para iniciar el juego
  juego.jugar();
  