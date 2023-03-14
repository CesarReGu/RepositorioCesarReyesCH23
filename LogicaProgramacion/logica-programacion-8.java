import java.util.*;

public class NumerosPrimosAlInicio {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        int[] numeros = new int[10];
        int[] numerosPrimos = new int[10];
        int[] numerosNoPrimos = new int[10];
        int contadorPrimos = 0;
        int contadorNoPrimos = 0;
        
        // Solicitar al usuario 10 números y almacenarlos en un array
        for (int i = 0; i < numeros.length; i++) {
            System.out.print("Introduce el número " + (i+1) + ": ");
            numeros[i] = sc.nextInt();
        }
        
        // Recorrer el array y separar los números primos de los no primos
        for (int i = 0; i < numeros.length; i++) {
            if (esPrimo(numeros[i])) {
                numerosPrimos[contadorPrimos] = numeros[i];
                contadorPrimos++;
            } else {
                numerosNoPrimos[contadorNoPrimos] = numeros[i];
                contadorNoPrimos++;
            }
        }
        
        // Copiar los números no primos al final del array de números primos
        System.arraycopy(numerosNoPrimos, 0, numerosPrimos, contadorPrimos, contadorNoPrimos);
        
        // Mostrar el array original
        System.out.println("\nArray original mostrando la posición del array más el valor:");
        for (int i = 0; i < numeros.length; i++) {
            System.out.println(i + " - " + numeros[i]);
        }
        
        // Mostrar el array con los números primos al principio
        System.out.println("\nArray con los números primos al principio mostrando la posición del array más el valor:");
        for (int i = 0; i < numerosPrimos.length; i++) {
            System.out.println(i + " - " + numerosPrimos[i]);
        }
        
        sc.close();
    }
    
    // Función para comprobar si un número es primo
    public static boolean esPrimo(int numero) {
        if (numero <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        return true;
    }

}
