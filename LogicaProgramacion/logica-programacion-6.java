import java.util.Scanner;

public class InvertirTexto {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Escribe una palabra o frase: ");
        String entrada = scanner.nextLine();

        String invertida = invertirCadena(entrada);

        System.out.println("Al revés: " + invertida);
    }

    private static String invertirCadena(String str) {
        StringBuilder sb = new StringBuilder(str);
        sb.reverse();
        return sb.toString();
    }
}
