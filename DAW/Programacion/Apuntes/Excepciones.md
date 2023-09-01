# Excepciones

```java
    import java.io.*;
    //Errores por error del Usuario como eliminacion de fiheros
    try {} catch(IOException e){}

    //Lanzar excepcion. 			
    throw new NombreExcepcion("Error por tal motivo");
    //Envolver metodo con try catch     
    try {} catch(Exception e){
        e.printStackTrace();
        e.getMessage();
    }

    //Se pueden concatenar muchos catch

```
