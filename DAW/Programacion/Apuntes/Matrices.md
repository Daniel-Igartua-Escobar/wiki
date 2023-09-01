# Matrices

## Normales
```java

    int [] numeros = new int[3]; // Array de 3 números (posiciones del 0 al 2).
    numeros[0]=99; // Primera posición del array.

    int [] numeros = {99, 32, 45}; //Inicar el array con valores


    String [] numeros = new String[3]; // Array de 3 números (posiciones del 0 al 2).
    numeros[0] = "azul"; // Primera posición del array.

    String [] colores = {"rojo", "verde", "azul"};  //Inicar el array con valores

```

## Bidimensionales
```java
    //filas, columnas
        int [][] matrix = new int[2][3];
        matrix[0][0] = 12;
        matrix[0][1] = 5;
        matrix[0][1] = 9;

        matrix[1][0] = 30;
        matrix[1][1] = 40;
        matrix[0][1] = 50;

        //For
        for(int i=0;i<2;i++) {
            //filas
        	System.out.println();
            for(int j=0;j<3;j++) {
                //columnas
            	System.out.print(matrix[i][j] + " ");
            }
            
        }

        //For each
        for(int[] fila: matrix) {
           	System.out.println();
        	for(int z: fila) {
             	System.out.print(z + " ");
        	}
        }

        //Inicializar matriz directamente
        int [][] matrix = {
            {12, 23, 40},
            {40, 35, 1}
        };
```
