package MisFunciones;

public class FuncionTrigonometrica {
//Torre recta (90 grados)
// Usar funciones de la libreria Math
//Impresiones en consola de todos los datos
//Datos del tipo double o float
	
	// Formula original: tan(θ) = h/d
	// Despejada h = d*tan(θ)
	
	public static double calcularAltura(double distancia, double angulo) {
		double altura = distancia * Math.tan(Math.toRadians(angulo)); //Formula usando libreria Math
		return altura;
	}
}
