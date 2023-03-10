package com.corg.testers;

import com.corg.clases.Mensajes;
import com.corg.clases.OperacionesAritmeticas;
import com.corg.clases.Resta;
import com.corg.clases.Suma;

public class TestOperacionesAritmeticas {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Suma s = new Suma (5,2);
		OperacionesAritmeticas ss = new Suma(10,3);
		Mensajes sss  = new Suma();
		Mensajes sr = new Resta(10,4);
		
		System.out.println("Suma es: " + s.sumar());
		System.out.println("Operaciones Aritmeticas: " + ss.sumar());
		s.mensaje();
		sss.mensajes();
		sr.mensajes();

	}

}