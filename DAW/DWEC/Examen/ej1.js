class ArrayAleatorio {
    constructor() {
        const filas = this.generarAleatorio(1, 5);
        const columnas = this.generarAleatorio(1, 5);
        // for (let index = 0; index < filas; index++) {
        //     const fila = new Array(columnas);
        //     arrayAleatorio.push(fila);
        // }

        this.arrayAleatorio = new Array(filas).fill('').map(() => new Array(columnas).fill(''));
    }

    generarAleatorio(inicial, final) {
        return Math.floor((Math.random() * final) + inicial);
    }

    rellenar() {
        this.arrayAleatorio = this.arrayAleatorio.map(e => e.map(e => this.generarAleatorio(0, 499)));
    }

    valoresGrandes() {
        let numerosGrandes = '';
        this.arrayAleatorio.forEach(e => {
            const numeros = e.filter(e => e > 250);
            if (numeros) {
                numerosGrandes += numeros + ','
            }
        })

        return numerosGrandes;
    }
}

const aleatorio = new ArrayAleatorio();


const imprimirNumeros = setInterval(() => {
    aleatorio.rellenar();
    const numeros = aleatorio.valoresGrandes();
    document.getElementById("resultado").innerHTML += `Los valores iguales o mayores a 250 son: ${numeros}<br>`;
}, 2000);

function parar() {
    clearInterval(imprimirNumeros);
}