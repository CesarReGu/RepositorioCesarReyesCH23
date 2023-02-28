package control;

import java.util.Scanner;

public class EstructuraMultiple {
	Scanner dato = new Scanner(System.in);

	public void vocal() {
		System.out.print("Introduzca una letra: ");
		char letra = dato.next().charAt(0);
		switch (letra) {
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
		case 'A':
		case 'E':
		case 'I':
		case 'O':
		case 'U':
			System.out.println(letra + " Es vocal");
			break;
		default:
			System.out.println(letra + " No es vocal");
			break;
		}
	}

	public void notas() {
		System.out.print("Introduzca una numero: ");
		int nota = dato.nextInt();
		switch (nota) {
		case 10:
			System.out.println("EXCELENTE!!!");
			break;
		case 9:
			System.out.println("Muy bien");
			break;
		case 8:
			System.out.println("Bueno");
			break;
		case 7:
			System.out.println("Regular");
			break;
		case 6:
			System.out.println("Deficiente");
			break;
		case 5:
		case 4:
		case 3:
		case 2:
		case 1:
		case 0:
			System.out.println("REPROBADO");
			break;
		default:
			System.out.println("Introduce un numero valido");
			break;
		}
	}

	public void ternario() {
		System.out.println("Introduzca un primer valor numerico: ");
		int entradaV = dato.nextInt();
		System.out.println("Introduzca un segundo valor numerico ");
		int entradaF = dato.nextInt();
		int  menor = (entradaV <= entradaF) ? entradaV : entradaF;
		System.out.println("---> " + menor);
	}
}
