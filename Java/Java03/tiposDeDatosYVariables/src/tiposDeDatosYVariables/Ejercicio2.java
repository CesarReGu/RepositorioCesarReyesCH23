package tiposDeDatosYVariables;

public class Ejercicio2 {
    public static void main(String[] args) {
        double variableF = 320; //Valor de Fahrenheit
        double ConversionK = (variableF - 32) * 5/9 + 273.15; //Formula F A K
        double ConversionC = (variableF - 32) * 5/9; // Formula F a C

        System.out.println(ConversionK); //Imprimimos
        System.out.println(ConversionC);
        
        //Segundo ejercicio
        byte numero4 = 24; //numero a comparar
        if (numero4 % 2 == 0) { //el residuo será 0 cuando se divide un numero par entre 2
        	System.out.println("Es par");
        } else {
        	System.out.println("Es impar");
        }
        
    }
}
