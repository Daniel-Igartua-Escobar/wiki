# Date

```java
    import java.util.*;

    int anno;
    int mes;
    int dia;
    GregorianCalendar calendario = new GregorianCalendar(anno, mes-1, dia);
    Date fecha = calendario.getTime();
    SimpleDateFormat dt1 = new SimpleDateFormat("yyyyy-mm-dd");
    System.out.println(dt1.format(fecha));

    import java.time.*;
    System.out.println("La fecha actual es: " + LocalDate.now());
    System.out.println( "La hora actual es: " + LocalTime.now() );
    System.out.println( "La fecha y hora actuales son: " + LocalDateTime.now() );
    System.out.println( "El instante actual es: " + Instant.now() );
    System.out.println( "La fecha y hora actuales con zona horaria son: " + ZonedDateTime.now() );
```
