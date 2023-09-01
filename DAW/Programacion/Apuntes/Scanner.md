# Scanner

```java
package poo;

import java.io.*;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Excepciones {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		  
		  pedir_datos();
	}
	
	static int pedir_datos() {
        Scanner sc = new Scanner(System.in);

        while(true) {
    		try {
    			System.out.println("Introduce un numero");
    	        return sc.nextInt();
    		} catch(Exception e) {
    			System.out.println("El dato no es correcto");
    			sc.nextLine();
    		}
        }
	}
}
´´´

```java
    public static int leerInt()
    {
        Scanner sc = new Scanner(System.in);
        while (true)
        {
            try
            {
                return sc.nextInt();
            }
            catch (Exception e)
            {
                sc.nextLine();                
            }
        }
    }
```
