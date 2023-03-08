package com.generation.corg.mains;

import com.generation.corg.clases.ClaseGenerica;

public class TestGenerico {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ClaseGenerica <Integer> int0bj = new ClaseGenerica<Integer>(55);
		ClaseGenerica <String> string0bj = new ClaseGenerica<String>("Prueba");
		
		int0bj.claseTipo();
		string0bj.claseTipo();

	}

}
