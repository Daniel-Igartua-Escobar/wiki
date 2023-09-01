## Imprimir

```java
    //Imprimir por consola
    System.out.print();
	System.out.println();
    System.out.printf(String format, Object… args); //System.out.printf("%1.4", 3.56565656)    3.565
    System.err
    System.in
```


## Solicitar datos

```java
    //Importamos Scanner
    import java.util.Scanner;
    //Instanciamos el scanner
    Scanner scanner = new Scanner(System.in);
    //Pedimos datos
    scanner.nextFloat(); // Pedir tipo de dato
    scanner.nextDouble();
    scanner.nextInt();
    String cadena = teclado.nextLine();
    //Cerramos el scanner
    scanner.close();
```

Ex:
```java
    import java.util.Scanner;

    public class HorasSueldo {
        public static void main(String[] args) {
            float h;
            Scanner leer=new Scanner(System.in);
            System.out.println("Solcicitar datos");
            h=leer.nextFloat(); // Pedir tipo de dato
            // Utilizar los datos
            leer.close();
        }
    }
```
