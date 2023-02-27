package tiposDeDatosYVariables;

public class ejercicio {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Ejercicio 1
		//Declara 3 variables de tipo entero y utiliza el operador * y %
		int num1 = 8;
		int num2 = 56;
		int multiplicacion = num1 * num2;
		
		int modulo = num1 % 2;
		System.out.println("La multiplicacion es: " + multiplicacion);
		System.out.println("El módulo de 8 es: " + modulo);

		//Ejercicio 2
		//Declara dos variables de tipo boolean y utiliza el operador ==
		
		boolean esVerdadero = true;
		boolean esFalso = false;
		if (esVerdadero == false) {
			System.out.println(esVerdadero);
		}
		

		//Ejercicio 3
		//Declara dos variables de tipo Double y utiliza el operador <
		
		double cambioDinero = 25.50; //25.51 //25.52 //25.55
		if (cambioDinero > 25.49) {
			cambioDinero = 26;
			System.out.println(cambioDinero);
		}
		

	}

}