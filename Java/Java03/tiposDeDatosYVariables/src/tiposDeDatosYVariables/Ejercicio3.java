package tiposDeDatosYVariables;

public class Ejercicio3 {
	 public static void main(String[] args) {
	// Verificar si un número es par y positivo:
		int num = 6;
		if (num % 2 == 0 && num >0){
			System.out.println(num +" es par y positivo");
		} else {
            System.out.println(num +"no cumple la condicion");
        }

		
	// Verificar si un número está dentro de un rango específico
	      int num2 = 10;
	        if (num2 >= 10 && num2 < 20) {
	            System.out.println("esta dentro del rango");
	        }else {
	            System.out.println("no esta dentro del rango");
	        }

		
		
	// Verificar si una cadena es igual a otra o no
		String cadena1 = "Hola";
		String cadena2 = "hola";
		if (cadena1 == cadena2) {
			System.out.println("Son iwales");
		} else { System.out.println("No son iwales");}
}
}