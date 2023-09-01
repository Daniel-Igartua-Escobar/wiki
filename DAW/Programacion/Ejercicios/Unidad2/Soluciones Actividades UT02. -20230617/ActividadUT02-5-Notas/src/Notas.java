
public class Notas {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
	
	//Declaramos y creamos un array de 25 notas con datos generados aleatoriamente (lo hacemos así por comodidad o vaguería, según se mire)  
			int []notas=new int[25];

			//Carga de los datos. Al aplicar el casteo, truncamos la parte decimal generada por Math.random()
			for(int i=0; i<notas.length; i++) {
				notas[i]=(int) (10*(Math.random())) + 1;
			}
			
			//Mostramos todos los datos
			for(int i=0; i<notas.length; i++) {
				System.out.println("Nota en posicion " + i + ": "+ notas[i]);
			}
			
			int notaMaxima=1, notaMinima=10;
			
			//Análisis de los datos
			for(int i=0; i<notas.length; i++) {
				if (notas[i]<notaMinima)
					notaMinima=notas[i];
				if (notas[i]>notaMaxima)
					notaMaxima=notas[i];
				
			}
			
			//Salida tras analisis completado
			System.out.println("Nota mínima: " + notaMinima);
			System.out.println("Nota máxima: " + notaMaxima);
			
	}

}
