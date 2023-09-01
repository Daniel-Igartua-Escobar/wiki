/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ejercicioa212;
import java.util.Scanner;
/**
 *
 * @author Anuska
 */
public class EjercicioA212 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Escribe los grados centígrados");
        double c = sc.nextDouble();
        System.out.println(c+"ºC equivalen a "+(32 + ( 9 * c / 5))+"ºF");
    }
    
}
