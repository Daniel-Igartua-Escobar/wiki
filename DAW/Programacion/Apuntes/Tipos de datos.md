## Tipos de datos

```java
    // TIPOS PRIMIYIVOS
    //Usar int y double

    // Numeros enteros
    byte mes = 12; // -128 a 127
    short numero = 30; // -32,768 a 32,767
    int contador = 0; // -2,147,483,648 a 2,147,483,647
    long numeroLargo = 13123123L // -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807 añadir L

    // Decimales
    float interes = 4.25e2F;    // 7 decimales añadir F
    double pi = 3.1415926535897932384626433832795; // 15 decimales

    // Caracter
    char letra = 'Z'; //Caracter Unicode

    // Booleano
    boolean encontrado = true; // true o false

    // Constantes final tipoDeVariable nombreVariable
    final double PI = 3.15;




    //OBJETOS

    //String
    String mensaje = "Texto";

    //Arrays, conjunto de datos
    int[] numeros = new int[3]; // Array de 3 números (posiciones del 0 al 2).
    numeros[0]=99; // Primera posición del array.
    //Inicar el array con valores
    int[] numeros = {99, 32, 45};
    String[] colores = {"rojo", "verde", "azul"};

    // Tipo enumerado, declarar arriba de public static void main
    public enum Planetas {Mercurio, Venus, Tierra, Marte, Jupiter, Saturno, Urano, Neptuno};

    Planetas primerPlaneta = Planetas.Mercurio; // Instancia de un enum de Planetas
    
    System.out.println("El primer planeta es: " + primerPlaneta);
    System.out.println("La posición del primer planeta es " + primerPlaneta.ordinal());  
    System.out.println("El número de planetas es " + Planetas.values().length);

    primerPlaneta.name();    // Devuelve un String con el nombre de la constante (DELANTERO)
    primerPlaneta.toString();    // Devuelve un String con el nombre de la constante (DELANTERO)
    primerPlaneta.ordinal();    // Devuelve un entero con la posición del enum según está declarada (3).
    primerPlaneta.compareTo(Enum otro);    // Compara el enum con el parámetro según el orden en el que están declarados lo enum
    Planetas.values();    // Devuelve un array que contiene todos los enum
```

