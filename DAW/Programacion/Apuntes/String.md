# String

```java
    String nombre = "Daniel";
    nombre.length(); //Longitud de la cadena
    nombre.charAt(i); //Devuelve letra según la posicion i. nombre.charAt(0) D
    nombre.substring(x, y); //Devuelve strinf, x posicion inicial y cantidad de caracteres
    nombre.equals(cadena) //Devuelve true si son iguales
    nombre.equalsIgnoreCase(cadena) //Igual ignora mayusculas
```



```java
 //Covertir Dato string a numero
 String edad = "23";
 int edad_usuario = Integer.parseInt(edad);

 //Covertir Dato string a decimal
 String numero = "131321321.2424";
 double numero_double  = Double.parseDouble(numero);

 //Covertir numero a string
 int numEntero = 4;    
 String numCadena= String.valueOf(numEntero);
```