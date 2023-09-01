# Interfaces

## Utilizar interfaz existente

```java
public class Empleado implements Comparable {

    protected String nombre;
    protected double sueldo;

    public Empleado(String nombre, double sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    
    public String mostrarSueldo() {
    	return "El sueldo de " + nombre + " es de: " + sueldo;
    }

    public int compareTo(Object miObjeto) {
        Empleado otroEmpleado = (Empleado) miObjeto;
        
        if(this.sueldo > otroEmpleado.sueldo) {
        	return -1;
        }
        
        if(this.sueldo < otroEmpleado.sueldo) {
        	return 1;
        }
        
        return 0;
    }

}
```

```java
    import java.util.Arrays;

    public class TestEmpleado {

        public static void main(String[] args) {
            // TODO Auto-generated method stub
            Empleado [] misEmpleados = new Empleado[4];
            misEmpleados[0] = new Empleado("pedro", 2000);
            misEmpleados[1] = new Empleado("maria", 1000);
            misEmpleados[2] = new Empleado("paula", 5000);
            misEmpleados[3] = new Empleado("jose", 800);

            Arrays.sort(misEmpleados);
            
            for(Empleado elemento: misEmpleados) {
                System.out.println(elemento.mostrarSueldo());
            }
            
        
        }

    }
```





## Crear una interfaz
```java
    public interface Jefes {
        
        String tomar_decisiones();

    }
```

```java
public class Jefatura extends Empleado implements Jefes {
    
    private double bonus;

    public Jefatura(String nombre, double sueldo, double bonus) {
        super(nombre, sueldo);
        this.bonus = bonus;
    }
    
    public String mostrarSueldo() {
        return "El sueldo de " + nombre + " es de: " + (sueldo + bonus);
    }
   

	@Override
	public String tomar_decisiones(String decision) {
		// TODO Auto-generated method stub
		return "La decision a tomar es: " + decision;
	}

}
```

```java
public class TestJefatura {

	public static void main(String[] args) {	
		Jefatura jefe1 = new Jefatura("paco", 8000, 500);
		System.out.println(jefe1.tomar_decisiones("Contratar"));
	}
}
```

## Extender interfaces Interfaz 
```java
public interface Trabajadores {

    //Metodo en la interfaz
	double establece_bonus(double gratificacion);
	
    //public static final. Publica, pertenece a la clase y es una constante. Se hace automaticamente
    //Constante en la interfaz
	double bonus_base = 500;
}
```

```java
    public interface Jefes extends Trabajadores {
        String tomar_decisiones();
    }
```


```java
public class Jefatura extends Empleado implements Jefes {
    //Añadimos el metodo de la interfaz y utilizamos la constante
	public double establece_bonus(double gratificacion) {
		double prima = 2000;
		return Trabajadores.bonus_base+gratificacion+prima;
	}

}
```