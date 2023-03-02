package coleccionesCR;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class MisColecciones {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		wrapperClass();
	}
	public void listasCollections() {
		List miLista = new ArrayList();
		miLista.add(1);
		miLista.add(2);
		miLista.add(3);
	}
	public void imprimir(Collection collection) {
		for (Object elementos : collection) {
			
		}
	}
	static void wrapperClass() {
		//byte,short,char,long,float,int,double
		byte numeroB = 12;
		System.out.println("Tamaño de un byte" + Byte.SIZE);
		System.out.println("Valor Max " +Byte.MAX_VALUE);
		System.out.println("Valor Min " +Byte.MIN_VALUE);
		
		System.out.println("---> "+numeroB);
		System.out.println("Tamaño de un entero: " +Integer.BYTES);
		System.out.println("Tamaño de un entero: " +Integer.SIZE);
		System.out.println("VALOR MAX: " +Integer.MAX_VALUE);
		System.out.println("VALOR MIN: " +Integer.MIN_VALUE);
		
		System.out.println("Tamaño de un short: " +Short.BYTES);
		System.out.println("Tamaño de un short: " +Short.SIZE);
		System.out.println("VALOR MAX: " +Short.MAX_VALUE);
		System.out.println("VALOR MIN: " +Short.MIN_VALUE);
		
		System.out.println("Tamaño de un long: " +Long.BYTES);
		System.out.println("Tamaño de un long: " +Long.SIZE);
		System.out.println("VALOR MAX: " +Long.MAX_VALUE);
		System.out.println("VALOR MIN: " +Long.MIN_VALUE);
	}
}
