# Serializacion

```java
package poo;
import java.util.*;
import java.io.*;

public class Serializacion {

	public static void main(String[] args) {
		
		Administrador jefe = new Administrador("Manuel", 3000, 2023, 3, 10, 500);
		Empleado [] misEmpleados = new Empleado[4];
		
		misEmpleados[0] = jefe;
		misEmpleados[1] =  new Empleado("Marcos", 2000, 2023, 3, 12);;
		misEmpleados[2] =  new Empleado("Pablo", 2300, 2023, 3, 12);;
		misEmpleados[3] =  new Empleado("Marta", 2100, 2023, 3, 12);;

		//System.out.println(empleado1.obtener_datos());
		
		try {
            //Serializamos el objeto
			ObjectOutputStream escribiendo_fichero = new ObjectOutputStream(new FileOutputStream("/Users/dlir/Documents/misEmpleados.dat"));
			escribiendo_fichero.writeObject(misEmpleados);
			escribiendo_fichero.close();
			
            //Deserializamos el objeto
			ObjectInputStream recuperando_fichero = new ObjectInputStream(new FileInputStream("/Users/dlir/Documents/misEmpleados.dat"));
			Empleado [] personalRecuperado = (Empleado[]) recuperando_fichero.readObject();
			recuperando_fichero.close();
			
			for(Empleado e: personalRecuperado) {
				System.out.println(e);
			}
		}  catch(Exception e) {

		}
	}

}

class Empleado implements Serializable {
	
    //Numero para evotar errores al serializar versiones diferentes incluir en todas las clases que hereden de esta
	private static final long serialVersionUID = 1L;
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
	
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public double getSueldo() {
		return sueldo;
	}

	public void setSueldo(double sueldo) {
		this.sueldo = sueldo;
	}

	public Date getFechaContrato() {
		return fechaContrato;
	}

	public void setFechaContrato(Date fechaContrato) {
		this.fechaContrato = fechaContrato;
	}
	
	public int obtenerTotalEmpleados() {
		return numeroTotalEmpleados;
	}

	@Override
	public String toString() {
		return "Los datos del usuario son: \n" + 
				"Nombre: " + nombre + "\n" +
				"Sueldo: " + sueldo + "\n" +
				"FechaContrato: " + fechaContrato + "\n"; 
	}
}

class Administrador extends Empleado {
	
	private static final long serialVersionUID = 1L;
	private double bonificacion;
	
	public Administrador(String nombre, double sueldo, int anno, int mes, int dia, double bonificacion) {
		super(nombre, sueldo, anno, mes, dia);
		this.bonificacion = bonificacion;
	}
	
	@Override
	public String toString() {
		return "Los datos del usuario son: \n" + 
				"Nombre: " + nombre + "\n" +
				"Sueldo: " + sueldo + "\n" +
				"FechaContrato: " + fechaContrato + "\n" +
				"Bonificacion: " + bonificacion + "\n";
	}

}
```