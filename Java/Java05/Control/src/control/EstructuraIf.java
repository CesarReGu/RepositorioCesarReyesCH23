package control;

import java.util.Scanner;

public class EstructuraIf {
	Scanner entrada = new Scanner(System.in);
	public void controlIf() {
		long nota = 6;
		if (nota >5) {
			System.out.println("Nota aprobada " + nota);
		}
		System.out.println("Continua el flujo de control..");
		if (nota >= 5) {
			System.out.println("Nota aprobada " + nota);
		} else {
			System.out.println("Nota no aprobada " +nota);
		}
		
	}
	
	public void divisible() {
		System.out.println("Introduzca un numero: ");
		int dato1 = entrada.nextInt();
		System.out.println("Introduzca un numero: ");
		int dato2 = entrada.nextInt();
		if (dato1 % dato2 == 0) {
			System.out.println(dato1 + " Es divisible entre " + dato2);
		} else {
			System.out.println(dato1 + " No es divisible entre " +dato2);
		}
		
	}
	public void compara() {
		System.out.print("Introduzca un primer numero: ");
		int dato1 = entrada.nextInt();
		System.out.println("Introduzca un segundo numero: ");
		int dato2 = entrada.nextInt();
		
		if(dato1>dato2) {
			System.out.print("El Numero mayor es " +dato1);
		} else if(dato2>dato1) {
			System.out.print("El Numero mayor es " +dato2);
		} else {
			System.out.print("Los numeros son iguales");
		}
	}
	
	public void compara2() {
		System.out.print("Introduzca un primer numero: ");
		int dato1 = entrada.nextInt();

		
		if(dato1>0) {
			System.out.print(dato1 + " Es positivo");
		} else if(0>dato1) {
			System.out.print(dato1 +" Es negativo");
		} else {
			System.out.print(dato1 + " Es cero");
		}
	}
}
