package pruebasJunit.corg.test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import pruebasJunit.corg.app.Calculadora;

class Calculadora_Test {
	private Calculadora ct;
	private Calculadora ct1 = null;

	@BeforeEach
	public void configurandoBefore() {
		ct = new Calculadora();
		System.out.println("Ejecuntando el Before");
	}

	@AfterEach
	public void configurandoAfter() {
		ct = null;
		System.out.println("Ejencutando AfterEach");
	}

	@Test
	void calculadoraNull() {
		assertNull(ct1, "La clase es una instancia no nula");
		System.out.println("Ejecutando primer test Calculadora");
	}

	@Test
	public void primerosAssert() {
		/*
		 * 1. Indicar que se va a evaluar 2. Indicar lo que se va a realizar 3. Evaluar
		 * con el assert indicado
		 */
		int resultadoEsperado = 10;
		int resultadoActual;
		resultadoActual = ct.sumar(7, 3);
		assertEquals(resultadoEsperado, resultadoActual);
		System.out.println("Ejecutando el tercer paso assert");
	}

	@Test
	public void sumaTest() {
		assertEquals(20, ct.sumar(10, 10));
		System.out.println("Ejecutando cuarto test");
	}
	/*
	 * @Test void calculadoraNotNull() {
	 * assertNotNull(ct,"La clase es una instancia nula");
	 * System.out.println("Ejecutando primer test Calculadora"); }
	 */

	// Tipos TEST

	@Test
	public void tiposAsserts() {
		// TODO Auto-generated method stub
		assertTrue(1 == 1);
		assertEquals("Generation", "Generation");
		assertNull(ct1);
		Calculadora c1 = new Calculadora();
		Calculadora c2 = new Calculadora();
		Calculadora c3 = new Calculadora();
		assertSame(c1, c3);
		assertNotSame(c2, c3);
		assertEquals(1, 1.2, .5);
	}

	@Test
	public void validandoSuma() {
		// TODO Auto-generated method stub
		assertEquals(11, ct.sumar(5, 6));
	}

	@Test
	public void validandoResta() {
		assertEquals(50, ct.restar(56, 0));
	}

	@Test
	public void validandoRestaNegativa() {
		assertEquals(-10, ct.restar(1, 20));
	}

	@Test
	public void validandoDivision() {
		assertEquals(2, ct.division(10, 5));
	}

	@Disabled("En espera")
	@Test
	public void validandoByZero() {
		assertThrows(ArithmeticException.class, () -> ct.divisionByZero(10, 1), "No se puede dividir por cero");
	}
}
