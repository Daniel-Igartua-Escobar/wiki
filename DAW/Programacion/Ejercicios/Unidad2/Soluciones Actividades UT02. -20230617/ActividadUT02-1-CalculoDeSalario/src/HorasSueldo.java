import java.util.Scanner;
public class HorasSueldo {
	public static void main(String[] args) {
		double salario;
		double ordinaria=8.25, extraordinaria=12;
		int maxHorasSemana=40;
		float h; //Horas trabajadas
		Scanner leer=new Scanner(System.in);
		System.out.println("¿Cuántas horas ha trabajado?");
		h=leer.nextFloat();
		if (h<=maxHorasSemana){
			salario=h*ordinaria;
			System.out.println("El trabajador ha trabajo "+h+" horas y le corresponde "+h+" X "+ordinaria+" = "+salario+"€");
		}
		else{
			salario=(maxHorasSemana*ordinaria)+((h-maxHorasSemana)*extraordinaria);
			System.out.println("El trabajador ha trabajo "+h+" horas y le corresponde "+maxHorasSemana+" x "+ordinaria+"= "+maxHorasSemana*ordinaria+"€    "+(h-40)+" X "+extraordinaria+" = "+(h-40)*extraordinaria+"€   total = "+salario+"€");
		}
		leer.close();
	}
}
