let frasesSuerte = [
    "Te casarás con un atleta profesional. Si las competencias de comer pueden ser consideradas un deporte.",
    "No te tomes la vida demasiado en serio. No saldrás de ella con vida.",
    "Si no puedes convencerlos, confúndelos.",
    "Si comes algo y nadie te ve comerlo, no tiene calorías.",
    "Ya era tiempo que saliera de esta galleta.",
    "No renuncies a tus sueños... Sigue durmiendo."
];

function imprimirLista() {
    let listaFrases = document.getElementById('listaFrases');
    // frasesSuerte.forEach(frase => {
    //     listaFrases.insertAdjacentHTML('beforeend', `<li>${frase}</li>`)
    // });
    listaFrases.innerHTML = frasesSuerte.map(frase => `<li ondblclick="eliminarFrase(this)">${frase}</li>`).join('');
}

imprimirLista();

function añadirFrase() {
    const nuevaFrase = document.getElementById('nuevaFrase').value.trim();

    if(!nuevaFrase) {
        alert('Tienes que introducir una frase');
        limpiarTextArea();
        return;
    }

    const listaFrases = document.getElementById('listaFrases');
    var frase = document.createElement('li');
    frase.ondblclick = function () {
        this.parentElement.removeChild(this);
    };
    frase.appendChild(document.createTextNode(nuevaFrase));
    listaFrases.appendChild(frase);
    limpiarTextArea();
}

function limpiarTextArea() {
    document.getElementById('nuevaFrase').value = '';
}

function eliminarFrase(element) {
    element.remove();
    if(confirm('¿Quieres borrar la frase?') === true) {
        element.remove();
    }
}

function resumen() {
    const nuemroFrasesArray = frasesSuerte.length;
    const numeroFrasesLista = document.getElementById('listaFrases').getElementsByTagName('li').length;
    alert(`nuemroFrasesArray: ${nuemroFrasesArray}, numeroFrasesLista: ${numeroFrasesLista}`);
}

function cambiarArray() {
    const listado = document.getElementById('listaFrases').getElementsByTagName('li');
    var arrayLista = Array.from(listado);
    frasesSuerte = arrayLista.map(e => e.textContent);
}

function verArray() {
    let listaFrasesArray = document.getElementById('listaFrasesArray');
    // frasesSuerte.forEach(frase => {
    //     listaFrases.insertAdjacentHTML('beforeend', `<li>${frase}</li>`)
    // });
    listaFrasesArray.innerHTML = frasesSuerte.map(frase => `<li ondblclick="eliminarFrase(this)">${frase}</li>`).join('');
}

function imprimirArray() {
    
}

function aleatorio() {
    const nombres = ["Luis", "Chris", "Link", "María", "Maggie", "Grim"];
    const aleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    return aleatorio;
}

function eliminarElemento() {
    frasesSuerte.splice(0, 1);
}

function crearGalleta(form) {
    var formData = new FormData(form);
    let galleta = {};

    for (const [key, value] of formData) {
        galleta[key] = value;
    }

    localStorage.setItem("galleta", JSON.stringify(galleta));
    window.open('./galleta.html');
  }
  
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    crearGalleta(e.target);
  });