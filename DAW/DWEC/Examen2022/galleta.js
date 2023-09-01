const fecha = new Date().toLocaleDateString('es', {day:"numeric", month:"long", year:"numeric"});
document.getElementById('fecha').textContent = fecha;
const galleta = JSON.parse(localStorage.getItem("galleta"));


console.log(galleta.usuario_nombre)
const datos = document.getElementById('datos');
const nombre_P = document.createElement("p");
nombre_P.appendChild(document.createTextNode(galleta.usuario_nombre));
nombre_P.style.color = galleta.usuario_color
datos.appendChild(nombre_P);

function comprobarJava() {
    navigator.javaEnabled();
    window.location.href;
}

document.addEventListener("keydown", (e) => {
    if(e.key === 'Escape') {
        localStorage.clear();
        window.close();
    }
});

function capitalizeWords(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }