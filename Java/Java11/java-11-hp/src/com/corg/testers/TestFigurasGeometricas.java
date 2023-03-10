package com.corg.testers;
import com.corg.clases.Circulo;
import com.corg.clases.Cuadrado;
import com.corg.clases.FigurasGeometricas;
import com.corg.clases.Rectangulo;
import com.corg.clases.Triangulo;

public class TestFigurasGeometricas {

	public static void main(String[] args) {
		//Relación dinámica
		FigurasGeometricas rectangulo = new Rectangulo(10,2);
		FigurasGeometricas circulo = new Circulo(2);
		FigurasGeometricas cuadrado = new Cuadrado(5,5);
		FigurasGeometricas triangulo = new Triangulo(6,2);
		System.out.println(rectangulo.areas());
		System.out.println(circulo.areas());
		System.out.println(cuadrado.areas());
		System.out.println(triangulo.areas());
		System.out.println(rectangulo.toString());
		
		rectangulo.pedirDatos();
		System.out.println(rectangulo.toString());
		System.out.println(rectangulo.areas());
	}
}