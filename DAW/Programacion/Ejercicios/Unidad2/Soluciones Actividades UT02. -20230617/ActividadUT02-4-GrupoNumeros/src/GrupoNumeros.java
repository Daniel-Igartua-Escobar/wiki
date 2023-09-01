import java.io.*;
import java.util.Scanner;
public class GrupoNumeros
{
	public static void main(String args[]) throws IOException
	{
		Scanner teclado = new Scanner( System.in );
		
		//declarar variables
		int numero;
		int mayores;
		int intermedios;
		int menores;
		int contador;
		
		//inicializar contador
		mayores = 0;
		intermedios = 0;
		menores = 0;
		
		System.out.println("Introduce 10 numeros");
		
		for ( contador = 0; contador < 10; contador++)
		{
			System.out.println("Número " + (contador+1));
			numero = teclado.nextInt();
			if (numero <15)
			{
				menores++;
			}
			else if (numero >55)
			{
				mayores++;
			}
			else
			{
				intermedios++;
	
			}// fin si			
			
		}// fin para
			
		System.out.println("Los numeros menores son :" + menores);
		System.out.println("Los numeros intermedios son: " + intermedios);
		System.out.println("Los numeros mayores son: " + mayores);
			
	}//fin main
}//fin class