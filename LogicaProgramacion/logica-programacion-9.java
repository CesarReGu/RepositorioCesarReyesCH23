import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Diccionario {

    public static void main(String[] args) {
        // Creamos el diccionario Español-Inglés utilizando un HashMap
        Map<String, String> diccionario = new HashMap<String, String>();
        diccionario.put("perro", "dog");
        diccionario.put("gato", "cat");
        diccionario.put("elefante", "elephant");
        diccionario.put("jirafa", "giraffe");
        diccionario.put("tigre", "tiger");
        diccionario.put("león", "lion");
        diccionario.put("oso", "bear");
        diccionario.put("mono", "monkey");
        diccionario.put("cebra", "zebra");
        diccionario.put("tortuga", "turtle");
        
        // Pedimos al usuario una palabra en español
        Scanner scanner = new Scanner(System.in);
        System.out.print("Introduce un animal en español: ");
        String palabra = scanner.nextLine();
        scanner.close();
        
        // Buscamos la palabra en el diccionario y la imprimimos en inglés
        String traduccion = diccionario.get(palabra);
        if (traduccion != null) {
            System.out.println("La traducción de \"" + palabra + "\" es \"" + traduccion + "\".");
        } else {
            System.out.println("La palabra \"" + palabra + "\" no se encuentra en el diccionario.");
        }
    }

}