/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ejercicioa213;
import java.util.Scanner;
/**
 *
 * @author Anuska
 */
public class EjercicioA213 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Escribe un número entero");
        int numero = sc.nextInt();
        
        System.out.println((numero >=0)?"Positivo":"Negativo");
        System.out.println((numero%2==0)?"Es par":"Es impar");
        System.out.println((numero%5==0)?"Es múltiplo de 5":"No es múltiplo de 5");
        System.out.println((numero%10==0)?"Es múltiplo de 10":"No es múltiplo de 10");
        System.out.println((numero>=100)?"Es mayor o igual a 100":"Es menor que 100");
    }
    
}
