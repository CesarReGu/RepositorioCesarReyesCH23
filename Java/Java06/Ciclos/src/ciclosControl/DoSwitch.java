package ciclosControl;

import java.util.Scanner;

public class DoSwitch {
public void controlador() {
	Scanner s = new Scanner (System.in);
	Menus mp = new Menus();
	int opcion = 0;
	do {
		mp.menuPrincipal();
		System.out.print("Introduzca un op: ");
		 opcion = s.nextInt();
		 switch(opcion) {
		 case 1:
			 objetoUW.cicloW();
		 }
	}while(opcion != 7);
}
}
