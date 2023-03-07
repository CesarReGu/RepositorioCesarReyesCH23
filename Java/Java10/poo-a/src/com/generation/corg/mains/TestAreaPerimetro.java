package com.generation.corg.mains;

import com.generation.corg.clases.AreaPerimetro;
import com.generation.corg.clases.FigurasGeometricas;

public class TestAreaPerimetro {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		AreaPerimetro ap = new AreaPerimetro();
		FigurasGeometricas fg = new FigurasGeometricas();
		
		fg.setArea(ap.areaCuadrado(5));
		System.out.println("Area Cuadrado "+fg.getArea());
		
		fg.setPerimetro(ap.perimetroCuadrado(5));
		System.out.println("Perimetro del cuadrado: " +fg.getPerimetro());
		
		fg.setArea(ap.areaCirculo(15));
		System.out.println("Area del circulo " +fg.getArea());
		
		fg.setPerimetro(ap.perimetroCirculo(20));
		System.out.println("Perimetro del circulo " +fg.getPerimetro());
	}

}
