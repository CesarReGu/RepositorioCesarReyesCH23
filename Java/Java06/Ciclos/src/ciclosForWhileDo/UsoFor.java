package ciclosForWhileDo;

public class UsoFor {
public void cicloFor() {
	for(int i=0; i<10;i++) {
		System.out.println("El iterador --> "+i);
	}
}
public void letrasFor() {
	for (int i= 'A';i <= 'Z';i++) {
		System.out.print("soy --> " +i + ", ");
		char letra = (char) i;
		System.out.println("Soy -----> " + letra);
	}
}
}
