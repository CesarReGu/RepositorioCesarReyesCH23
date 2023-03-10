package hilos.corg.pruebas;

import hilos.corg.formathread.Hilo2;

public class TestRunnable {
    public static void main(String[] args) {
        Hilo2 hilo1 = new Hilo2("Pedro");
        Thread thread1 = new Thread(hilo1);
        thread1.start();
        
        new Thread(new Hilo2("Cesar")).start();

        new Thread(new Hilo2("Juan")).start();

    }
}