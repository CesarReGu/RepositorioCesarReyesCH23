package hilos.corg.formathread;

public class Hilo1 extends Thread {

	public Hilo1(String name) {
		super(name);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void run() {
		System.out.println("Se inicia el Thread/Hilo" + this.getName());
		for (int i = 0; i < 10; i++) {
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		System.out.println("Se finaliza el Thread/Hilo" + this.getName());
	}

}
