import java.util.Scanner;

public class PotenciaNumero {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner teclado = new Scanner( System.in );
		int base, exponente;
		System.out.println("Indique base:");
		base=teclado.nextInt();
		System.out.println("Indique exponente:");
		exponente=teclado.nextInt();
		
		//El método pow() de la clase Math tiene como parámetro números de tipo double. Si pasamos 
		//números de tipo int, serán adaptados a double automáticamente ya que no hay pérdida de precisión
		//Además el número devuelto será también de tipo double
		System.out.println(base + " elevado a " + exponente + " es " + Math.pow(base, exponente));
	}

}
