public class TiposEnumeradosPlanetas {
	/*
	 * Ejemplo de Tipos enumerados
	 */

	public enum Planetas {Mercurio, Venus, Tierra, Marte, Jupiter, Saturno, Urano, Neptuno};
	    
    public static void main(String[] args) {
        // codigo de la aplicacion
        Planetas primerPlaneta = Planetas.Mercurio;
        Planetas ultimoPlaneta = Planetas.Neptuno;
        
        System.out.println("El primer planeta es: " + primerPlaneta);
        System.out.println("El ultimo planeta es: " + ultimoPlaneta);
        System.out.println("La posición del primer planeta es " + primerPlaneta.ordinal());  
        System.out.println("La posición del ultimo planeta es " + ultimoPlaneta.ordinal());
        
        System.out.println("El número de planetas es " + Planetas.values().length);

    
    } 

} 



