function obtenerUsuarios() {
    const numeroUsuarios = document.getElementById('numeroUsuarios').value;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {generarDatos(this);}
    xhttp.open("GET", `https://randomuser.me/api/?results=${numeroUsuarios}&format=XML`);
    xhttp.send();
}

function generarDatos(xml) {
    const xmlDoc =  xml.responseXML
    const x = xmlDoc.getElementsByTagName('results');
    let usuarios = '';
    for (let i = 0; i < x.length-1 ; i++) {
        const name = x[i].getElementsByTagName('name');
        const title = name[0].getElementsByTagName('title')[0].childNodes[0].nodeValue;
        const last = name[0].getElementsByTagName('last')[0].childNodes[0].nodeValue;
        const nombre = `<br><span style="font-weight: bold;">${title} ${last}</span><br>` 
        const genero = `<span>Género: ${x[i].getElementsByTagName('gender')[0].childNodes[0].nodeValue}</span><br>`;
        const ciudad = `<span>Ciudad: ${x[i].getElementsByTagName('location')[0].getElementsByTagName('city')[0].childNodes[0].nodeValue}</p><br>`;
        
        usuarios += nombre + genero + ciudad;
}
document.getElementById("resultados").innerHTML = usuarios;
}