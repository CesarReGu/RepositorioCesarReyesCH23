package com.generation.corg.ManejoExcepciones;

import java.util.Scanner;

public class NoComprobadasExceptions{
	public static void main(String[] args) {
		int divisor;
		Scanner dato = new Scanner(System.in);
		System.out.println("Introduce un valor, chaval");
		
		try {
		divisor = Integer.parseInt(dato.next());
		int division = 10/0;
		System.out.println("---> "+division);
		}catch(ArithmeticException e) {
			System.out.println("No se pudo men " +e.getMessage());
		}catch(NumberFormatException m) {
			System.out.println("Nope " +m.getMessage());
		} finally {
			System.out.println("Este bloque es opcional y se va a ejecutar con o sin la exception"); 
		}
		System.out.println("Continuamos con la programacion habitual");
	}
}