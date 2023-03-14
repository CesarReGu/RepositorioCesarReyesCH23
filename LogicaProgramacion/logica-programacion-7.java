import java.util.Scanner;

public class Dex {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Declaración de variables
        String diaSemana;
        int hora;
        int minutos;
        int minutosFaltantes;

        do {
            // Solicitar día de la semana
            System.out.print("Introduce un día de la semana (Lunes a Viernes): ");
            diaSemana = sc.nextLine().toLowerCase();

            // Validar día de la semana
            if (!diaSemana.equals("lunes") && !diaSemana.equals("martes") && !diaSemana.equals("miércoles") &&
                    !diaSemana.equals("jueves") && !diaSemana.equals("viernes")) {
                System.out.println("Día de la semana inválido. Inténtalo de nuevo.");
            }
        } while (!diaSemana.equals("lunes") && !diaSemana.equals("martes") && !diaSemana.equals("miércoles") &&
                !diaSemana.equals("jueves") && !diaSemana.equals("viernes"));

        do {
            // Solicitar hora
            System.out.print("Introduce la hora (en formato de 24 horas): ");
            hora = sc.nextInt();

            // Validar hora
            if (hora < 0 || hora > 23) {
                System.out.println("Hora inválida. Inténtalo de nuevo.");
            }
        } while (hora < 0 || hora > 23);

        do {
            // Solicitar minutos
            System.out.print("Introduce los minutos: ");
            minutos = sc.nextInt();

            // Validar minutos
            if (minutos < 0 || minutos > 59) {
                System.out.println("Minutos inválidos. Inténtalo de nuevo.");
            }
        } while (minutos < 0 || minutos > 59);

        // Calcular minutos faltantes para el fin de semana
        if (diaSemana.equals("viernes") && hora >= 15) {
            minutosFaltantes = (4 * 24 + (15 - hora)) * 60 + (60 - minutos);
        } else {
            int diasFaltantes = 4 - obtenerDiaSemanaNumero(diaSemana);
            if (diasFaltantes < 0) {
                diasFaltantes += 7;
            }
            minutosFaltantes = (diasFaltantes * 24 + (15 - hora)) * 60 + (60 - minutos);
        }

        // Mostrar resultado por consola
        System.out.println("Faltan " + minutosFaltantes + " minutos para el fin de semana.");
    }

    // Método que obtiene el número del día de la semana (Lunes=1, Martes=2, etc.)
    private static int obtenerDiaSemanaNumero(String diaSemana) {
        switch (diaSemana) {
            case "lunes":
                return 1;
            case "martes":
                return 2;
            case "miércoles":
                return 3;
            case "jueves":
                return 4;
            case "viernes":
                return 5;
            default:
                return 0;
        }
    }
}

