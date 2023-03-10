package hilos.corg.pruebas;

import hilos.corg.formathread.Hilo1;

public class TestThread {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Thread h = new Hilo1("Cesar");
		h.start();
		Thread h0 = new Hilo1("Omar");
		h0.start();
		Thread h1 = new Hilo1("Reyes");
		h1.start();

		try {
			Thread.sleep(100);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		System.out.println(h.getState());
	}

}
