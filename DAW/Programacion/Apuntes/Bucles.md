# Bucles

## For
```java
    //Recorrer hasta un numero concreto
    for (contador = 0; contador < 10; contador++) {}

    //Recorrer array
    for(int i = 0; i < array.length; i++) {
        System.out.println("Nota en posicion " + i + ": "+ array[i]);
    }

    //For each, poner tipo de dato que tenga la matriz, en este caso String
    for(String elemnto:paises) {

    }


    //For each array, poner tipo de dato que tenga la matriz
    Empleado [] misEmpleados = new Empleado[3]:
    for(Empleado elemento:misEmpleados) {
        //Podemos acceder a los metodos y propiedades del objeto de la clase empleado
        elemento.
    }
```



## While
```java
    while(condicion) {
    }

    do {

    } while(condicion)
```


## Menu
```java
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int opcion = 0;

        salas = Util.recuperarDatos(fDatos);
        if (salas==null)
            salas = new ArrayList<Sala>();

		while(opcion != 4) {
			opcion =  menuPrincipal();
			switch(opcion) {
				case 1:
					crearSala();
					break;
			}
            Util.guardarDatos(fDatos, salas);
		}
	}
```