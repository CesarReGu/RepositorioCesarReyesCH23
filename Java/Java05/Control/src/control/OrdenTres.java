package control;

import java.util.Scanner;

public class OrdenTres {

	public void MayorMenor() {
		Scanner dato2 = new Scanner(System.in);

		System.out.print("Introduzca una numero: ");
		int numero1 = dato2.nextInt();
		System.out.print("Introduzca una numero: ");
		int numero2 = dato2.nextInt();
		System.out.print("Introduzca una numero: ");
		int numero3 = dato2.nextInt();

		if (numero1 >= numero2 && numero1 >= numero3) {
			if (numero2 >= numero3) {
				System.out.println("Valores ordenados de mayor a menor: " + numero1 + ", " + numero2 + ", " + numero3);
			} else {
				System.out.println("Valores ordenados de mayor a menor: " + numero1 + ", " + numero3 + ", " + numero2);
			}
		}
		
		
			if (numero2 >= numero3 && numero2 >= numero1) {
				if (numero1 >= numero3) {
					System.out.println(
							"Valores ordenados de mayor a menor: " + numero2 + ", " + numero1 + ", " + numero3);
				} else {
					System.out.println(
							"Valores ordenados de mayor a menor: " + numero2 + ", " + numero3 + ", " + numero1);
				}

			}
			
			if (numero3 >= numero1 && numero3 >= numero2) {
				if (numero1 >= numero2) {
					System.out.println(
							"Valores ordenados de mayor a menor: " + numero3 + ", " + numero1 + ", " + numero2);
				} else {
					System.out.println(
							"Valores ordenados de mayor a menor: " + numero3 + ", " + numero2 + ", " + numero1);
				}

			}
			
		}
}