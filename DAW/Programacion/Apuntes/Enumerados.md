# Enumerados

```java
//Hay que declararlo fuera del main
    public class UsoTallas {

        enum Talla = {MINI, MEDIANO, GRANDE, MUY_GRANDE};
  
        public static void main(String[] args) {
            // TODO Auto-generated method stub
            Talla s = Talla.MINI;
            Talla m = Talla.MEDIANO;
            Talla x = Talla.GRANDE;
            Talla xl = Talla.MUY_GRANDE;

        }
    }
```

```java
//Se puede crear un constructor
    import java.util.*;

    public class UsoTallas {

        enum Talla = {

            private String abreviatuta;

            private Talla(String abreviatuta) {
                this.abreviatuta = abreviatuta;
            }

            MINI("S"), MEDINAO("M"), GRANDE("X"), MUY_GRANDE("XL");

            public String dameAbreviatura() {
                return abreviatuta;
            }

        }

        
  
        public static void main(String[] args) {
            // TODO Auto-generated method stub
            Scanner entrada = new Scanner(System.in);
            System.out.println("Escribe una talla: MINI, MEDIANO, GRANDE, MUY_GRANDE");
            String entrada_datos = entrada.next().toUpperCase();
            Talla la_talla = Enum.valueOf(Talla.class, entrada_datos);
            System.out.println("Talla=" + la_talla);
            System.out.println("Abreviatuta=" + la_talla.dameAbreviatura());

        }
    }
```
