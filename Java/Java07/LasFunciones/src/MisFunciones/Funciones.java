package MisFunciones;

public class Funciones {

    //Las funciones se pueden declarar en cualquier lugar de la clase (si retorna algo)
    public static int sumar (int num1, int num2) {
        int resultado = num1 + num2;
        return resultado;
    }//cierre sumar
    
    
    
    //Funcion para imprimir asteriscos (void)
    public static void imprimirAsteriscos() {
        System.out.println("**********");
    }//cierre imprimirAsteriscos

    
    //Funcion que combina distintos tipos de valores
    public static float sumaDecimal (float valor1, int valor2) {
        int resultadoDecimal = (int) (valor1 + valor2);
        return resultadoDecimal;
    }
    
    
    
    //Este metodo tiene como funcion, ejecutar cosas
    public static void main(String[] args) {

        //Las invocaciones de la funcion se hacen generalmente dentro del metodo principal o main
        System.out.println("El resultado de la suma es: " + sumar(5,8));
        
        imprimirAsteriscos();
        
        System.out.println("El resultado de la suma decimal es: " + sumaDecimal(5.7f, 5));
        
        
        
        
        
    }//cierre de metodo main

}//cierre de clase Funciones


/*

Funciones 

    - No retornan valores: No devuelven nada, no se especifica nada, y no usamos la palabra return.
    
    - Si retornan valores: Se especifica el tipo de dato del argumento, el tipo de valor que regresa y se usa return para esto.


    - Sintaxis de las funciones que si retornan valores
    tipoDeRetorno nombreDeLaFuncion(tipoDeDato argumento1, tipoDeDato argumento2, ...) {
  // Cuerpo de la función
}

    - Sintaxis de las funciones que no retornan valores
    palabraReservada nombreDeLaFuncion(){
    //cuerpo de la funcion
     }
     
     

    


    


*/
