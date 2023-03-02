package ciclosForWhileDo;

import java.util.Scanner;

public class CicloDo {
	Scanner dato = new Scanner(System.in);
	public void digitosDo() {
		int valor =0;
		do {
		System.out.println("Introduzca un digito entre el 0 al 9");
		valor = dato.nextInt();
	} while(valor >=0 && valor <=9);
		System.out.println("Bye!");
}
}