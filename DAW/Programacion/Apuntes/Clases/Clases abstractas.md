# Herencia

## Clase abstracta
Son una plantilla obligatoria para las clases que hereden de ella, es la super clase y obliga
a generar los método que tenemos como abstractos.
```java
    abstract class Persona {

        private String nombre;

        public Persona(String nombre) {
            this.nombre = nombre;
        }

        public String dameNombre() {
            return nombre;
        }
        
        //Al crear un metodo abstracto tenemos que hacer la clase abstarcta
        //Al hacer un metodo abstracto obligamos a las clases que hereden de esta a definir
        //este método
        //No se construye el metodo, solo se define
        public abstract String dameDescripcion();
    }


    class Empleado extends Persona {

        private double sueldo;

        public Empleado(String nombre, double sueldo) {
            super(nombre);
            this.sueldo = sueldo;
        }

        //Al heredar de una clase abstracta nos obliga a crear el metodo abstarcto
        public String dameDescripcion() {
            return "Este empleado tiene un sueldo de " + sueldo;
        }

    }


    public class UsoPersona {

        public static void main(String[] args) {
            Persona [] lasPersonas = new Persona[2];
            lasPersonas[0] = new Empleado("Pedro", 2000);

            for(Persona p: lasPersonas) {
                //Al ser abstracto si ejecuta el metodo de su clase sin tener que hacer el casteo
                p.dameDescripcion();
            }
    }

}


```
