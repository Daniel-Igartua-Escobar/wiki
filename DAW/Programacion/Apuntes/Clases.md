# Clases

## Plantilla clase

```java
//Crear clase
public class Coche {
    //Atributos
    //final, no puede cambiar de valor
    private final int ruedas = 4;
    //static, variable a nivel de calse no de objeto
    private static int totalCoches = 0;
    //public, podria usarse fuera pero al ser final no puede modificarse y static es a nivel de clase
    public static final double PI = 3.14;
    //privadas
    private int matricula;
    private String color;
    private boolean asientos_cuero;

    //Constructor por defecto, mismo nombre que la clase
    public Coche() {
        matricula = 1253;
        color = "Azul";
        coches++;
    }

    //Getter
    public String get_color() {
        return color;
    }

    //Setter
    public void asientos_cuero(Boolean asientos_cuero) {
        //Usamos this cuando el argumento se llama igual que la variable
       this. asientos_cuero = asientos_cuero;
    }

    //Metodo a nivel de clase, se puede utilizar sin instanciar un objeto
    public static String dame_total_coches() {
        //Solo se puede acceder a variables static
        return "El total de coches es: " + totalCoches;
    }
}   
```
## Instanciar clase

```java
    //instanciar clase
    Coche coche1 = new Coche();
    System.out.println(    coche1.get_color();)

    //Metodo a nivel de clase
    Coche.dame_total_coches();
```

## Constructores

```java
    //constructores, puede tener varios siempre que cambien los argumentos
    public Coche() {
        matricula = 1253;
        color = "Azul";
        coches++;
    }

    public Coche(String color, int matricula) {
        matricula = 1253;
        color = "Azul";
        coches++;
    }

    public Coche(String color) {
        //Al usar this, llamaria al constructor que coincide con sus argumentos
        this.(color, 12345)
    }
```


## Herencia

```java
    public class Furgoneta extends Coche {
        private int capacidad_extra;
        private int plazas_extra;
        private int incentivo;

        public Furgoneta(int plazas_extra, int capacidad_extra) {
            super();
            this.plazas_extra = plazas_extra;
            this.capacidad_extra = capacidad_extra;
        }

        //Pasar parametros al constructor de la clase que se extiende
        public Furgoneta(String color, int matricula, int plazas_extra) {
            super(color, matricula);
            this.plazas_extra = plazas_extra;
        }

        //Sobreescribir metodo de la clase de la que se extiedne. Tiene que llamarse igual en la clase de la que se hereda
        public double dameSueldo() {
            //Llamanos al metodo de la clase padre
            double sueldoJefe=dameSueldo();
            return sueldoJefe + incentivo
        }
    }
```

```java
    //instanciar clase
    Furgoneta furgoneta1 = new Furgoneta();

    //Podemos acceder a todos los metodos de la clase que hereda
    furgoneta1.get_color();
    Furgoneta.dame_total_coches()
```


## Polimorfismo
```java
    Coche[] misCoches = new Coche[5];
    misCoches[0] = new Coche();
    misCoches[1] = new Coche();
    misCoches[2] = new Coche();

    //Podemos asignar a un array un objeto que no sea de su tipo si extiende de su clase
    Furgoneta furgoneta1 = new Furgoneta();
    misCoches[3] = furgoneta1;
    misCoches[4] = new Furgoneta();


    for(Coche elemento:misCoches) {
        //Cuando en la posicion hay un Coche llama al metodo de su clase, cuando hay una furgoneta llama a su metodo
        //Si ambas clases tuviesen el mismo metodo
        elemento.dameSueldo()
    }

    //Si queremos utilizar un metodo que solo esta en la clase Furgoneta hay que hacer un casting de tipos
    Furgoneta furgoneta1 = (Furgoneta) misCoches(3);
    furgoneta1.metodoDeFurgoneta();

```

## Evitar que se herede de una clase

```java
    //Añadimos final
    final class Furgoneta extends Coche {
    }
```

## Evitar heredar metodos

```java
    //Añadimos final
    public final double dameSueldo() {

    }
```






















```java

//Clase con atributo estativo
public class Individuo {
	
    //Atributos
	private String nombre;
    private static int poblacion;

    //Constructor
	public Individuo(String nombre) {
		this.nombre = nombre;
		poblacion++; //Al ser de tipo entero se asume que partirá de valor 0
	}

    //Getter, tipo de dato que retorna
	public String getNombre() {
		return nombre;
	}

    //Setter, al no retornar nada se pone void
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Individuo i1 = new Individuo("02345219R", "José Nogales", 1978);
		Individuo i2 = new Individuo("32344401R", "Ana López", 1973);

		System.out.println("Tenemos una población de: " + Individuo.getPoblacion() + " personas");
	}

}
```

```java

public class Circulo {
	
    //Constante
	public static final double PI = 3.141592;
	private double radio;
	
	public Circulo(double radio) {
		this.radio = radio;
	}
	
	public Circulo() {
		radio = 2;
	}
	
	public double calcularSuperficie() {
		return 	radio * radio * PI;
	}
}
```

```java
public class Rectangulo
{
	private double base;
  	private double altura;
  	
  	//Constructor
  	public Rectangulo(double base,double altura) {
  		this.base = base;
  		this.altura = altura;
  	}
  	
  	//Constructor por defecto
  	public Rectangulo() {
  	}
  	
    //Constructor que copia el objeto
  	public Rectangulo(Rectangulo r1) {
  		base = r1.base;
  		altura = r1.altura;
  	}
		
	public double getArea()	{
		double area = base * altura;
		return area;
	}
	
	
	public double getPerimetro() {
		double perimetro = ((2 * base) + (2 * altura));
		return perimetro;
	}		
}

class TestRectangulo {
	public static void main(String args[]) {
		Rectangulo r1 = new Rectangulo(4,2);
        //Pasamos el objeto para hacer una copia
		Rectangulo r2 = new Rectangulo(r1);
	}
}
```
