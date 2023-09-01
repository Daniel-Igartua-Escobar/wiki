# ArrayList

```java
package poo;

import java.util.*;

public class UsoArrayList {

	
		public static void main(String[] args) {
			
	/*
		Empleado [] misEmpleados = new Empleado[3];

		misEmpleados[0] =  new Empleado("Marcos", 2000, 2023, 3, 12);
		misEmpleados[1] =  new Empleado("Pablo", 2300, 2023, 3, 12);
		misEmpleados[2] =  new Empleado("Marta", 2100, 2023, 3, 12);
	*/
		ArrayList <Empleado> listaEmpleados = new ArrayList<Empleado>();
		
		//listaEmpleados.ensureCapacity(11);
		
		listaEmpleados.add(new Empleado("Marcos", 2000, 2023, 3, 12));
		listaEmpleados.add(new Empleado("Pablo", 1000, 2023, 3, 12));
		listaEmpleados.add(new Empleado("Paula", 3000, 2023, 3, 12));

		
		/*for(Empleado e: listaEmpleados) {
			//System.out.println(e);
		}*/
		System.out.println(listaEmpleados.size());
		
		//listaEmpleados.trimToSize();
		
		listaEmpleados.set(2, new Empleado("Paula", 3000, 2023, 3, 12));
		listaEmpleados.get(2);
		
		
		//Iterar ArrayList
		
		Iterator <Empleado> mi_iterador = listaEmpleados.iterator();
		
		while(mi_iterador.hasNext()) {
			System.out.println(mi_iterador.next().dameDatos());
		}
		
        //iterar ArrayList
        public static Sala buscar(int n)
        {
            Iterator <Sala> it = salas.iterator();
            while (it.hasNext())
            {
                Sala s = it.next();
                if (s.getNumSala()==n)
                    return s;
            }
            return null;
        }
		
		ArrayList <String> lista = new ArrayList<String>();
		lista.add(new String("Rojo"));
		lista.add(new String("Verde"));
		lista.add(new String("Azul"));
		
		Iterator <String> it = lista.iterator();

		while (it.hasNext()) {

		  System.out.println(it.next());

		}
		
		//Copiar ArrayList en array
		/*
		Empleado arrayEmpleados [] = new Empleado[listaEmpleados.size()];
		listaEmpleados.toArray(arrayEmpleados);
		for(Empleado e: arrayEmpleados) {
			//System.out.println(e);
		}
		*/
	}

}

class Empleado {
	
	protected String nombre;
	protected double sueldo;
	protected Date fechaContrato;
	private static int numeroTotalEmpleados = 0;
	
	public Empleado(String nombre, double sueldo, int anno, int mes, int dia) {
		this.nombre =  nombre;
		this.sueldo = sueldo;
		GregorianCalendar calendario = new GregorianCalendar(anno, mes-1, dia);
		fechaContrato = calendario.getTime();
		numeroTotalEmpleados++;
	}
	
	public String dameDatos() {
		return nombre;
	}
	

	@Override
	public String toString() {
		return "Los datos del usuario son: \n" + 
				"Nombre: " + nombre + "\n" +
				"Sueldo: " + sueldo + "\n" +
				"FechaContrato: " + fechaContrato + "\n"; 
	}
}
```
