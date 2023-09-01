import java.util.Scanner;

public class Factorial {

	public static void main(String[] args) {
		Scanner leer=new Scanner(System.in);
		int num, resul=1;
		System.out.println("Escribe un número:");
		num=leer.nextInt();
		for(int i=num; i>1; i--)
			resul*=i;
		System.out.println("El factorial de "+ num +" es " + resul);
	}

}
