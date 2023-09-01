# Rutas

```java

package poo;
import java.io.*;

public class Rutas {

	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		File archivo = new File("bin");
		System.out.println(archivo.getAbsolutePath());
		System.out.println(archivo.exists());

		File archivo2 = new File("/Users/dlir/Documents/");
		System.out.println(archivo2.getAbsolutePath());
		System.out.println(archivo2.exists());
		
		String[] nombres = archivo.list();
		
	   for(int i= 0; i<nombres.length; i++) {
			System.out.println(nombres[i]);

	   }
	   
       File ruta3 = new File("/dlir/Documents/nuva_carpeta");
       ruta3.mkdir();
       
       File ruta4 = new File("/dlir/Documents/prueba_texto.txt");

       try {
    	   ruta4.createNewFile();
        } catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
       
       File ruta =  new File("/dlir/Documents/nuva_carpeta");
       String archivo_destino = ruta.getAbsolutePath();
       
       Escribiendo accede = new Escribiendo();
       accede.escribir(archivo_destino);

       ruta.delete();      
	}

}

class Escribiendo {
		
    public void escribir(String ruta) {
    	String frase = "Holaaa";

    	try {
    		FileWriter escritura = new FileWriter(ruta);
    		for(int i=0;i<frase.length();i++) {
    			escritura.write(frase.charAt(i));
    		}
    		
    		escritura.close();
    	} catch(IOException e) {
    		
    	}
    }
}

```
