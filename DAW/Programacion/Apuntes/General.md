# Apuntes

## Ejecutar fichero

```java
    //crear fichero .class
    javac NombreFichero.java

    //Ejecutar fihcero
    java MiModulo
```



## Eclipse

Crear proyecto

File -> New -> Project -> Java Project -> Nombre del proyecto, desactivar abajo modulos y finish

Crear clases

Encima del proyecto -> src -> click derecho -> new -> class -> nombre: MiCLase y check public static void 



## Documentacion

https://docs.oracle.com/javase/7/docs/api/
https://docs.oracle.com/javase/specs/
https://docs.oracle.com/javase/6/docs/index.html



## Tutoriales
https://www.tutorialesprogramacionya.com/javaya/index.php?inicio=0
https://www.youtube.com/watch?v=U709qY6S9rA&list=PLU8oAlHdN5BktAXdEVCLUYzvDyqRQJ2lk&index=1



## Nomenclatura

- Variables     miVariable
- Constantes    MI_CONSTANTE
- Clases        MiClase
- Funciones     mi_Funcion



## Secuencias de escape

\b  Retroceso
\r  Retorno de carro
\t  Tabulador
\'' Carácter comillas dobles
\n  Salto de línea
\'  Carácter comillas simples
\f  Salto de página
\\  Barra diagonal



## cast, convertir datos
```java
    int a;
    byte b;
    a = 12;               // no se realiza conversión alguna  
    b = 12;               // se permite porque 12 está dentro
                          // del rango permitido de valores para b
    b = a;                // error, no permitido (incluso aunque
                          // 12 podría almacenarse en un byte)
    byte b = (byte) a;    // Correcto, forzamos conversión explícita
``` 


## String métodos
```java
    length() Longitug
    concat() Concatenar 0 +
    equals() Compara las cadenas retirna booleano
    equalsIgnoreCase() Compara ignorando mayusculas
    substring() Extrae trozo de cadena
    toUpperCase() y toLowerCase()
    Valueof Transforma tipo primitivo en string
```