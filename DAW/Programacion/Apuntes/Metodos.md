# Metodos

```java
    //Constructore, nombre igual que la clase
	public Circulo(double radio) {
		super();
		this.radio = radio;
	}
	
	public Circulo() {
		radio = 2;
	}
	
	public double calcularSuperficie() {
		return 	radio * radio * PI;
	}

    //Los que retornan, poner tipo de dato
    public double calcularSuperficie() {
		return 	radio * radio * PI;
	}

    //Los que no retornan nada void
    public void setNombre(String nombre) {
		this.nombre = nombre;
	}

    //Privados
    private char calcularLetra() {
        int resto = dni%23;        
        String letras = "TRWAGMYFPDXBNJZSQVHLCKE";   
        return letras.charAt(resto);
    }

    //Metodo a nivel de clase, se puede utilizar sin instanciar un objeto
    public static String dame_total_coches() {
        //Solo se puede acceder a variables static
        return "El total de coches es: " + totalCoches;
    }

    //Sobreescribir método si se llama igual en la clase de la qie extiende
    @Override
    public String toString()
    {
        String numero = num+"";
        while (numero.length()<8)
        {
            numero = "0"+numero;
        }
        return numero+"-"+letra;
    }

```
