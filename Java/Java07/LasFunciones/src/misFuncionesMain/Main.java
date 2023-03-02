package misFuncionesMain;
import MisFunciones.FuncionTrigonometrica;
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		double distancia = 100;
		double angulo = 30;
		double altura = FuncionTrigonometrica.calcularAltura(distancia,angulo);
		System.out.println("Dada tu distancia de " +distancia +" y el angulo de " +angulo +" la altura de la torre es de: " +altura);
	}

}
