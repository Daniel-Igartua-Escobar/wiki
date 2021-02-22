## Copiar Objetos sin referencia
```javascript
const usuario = {
  nombre: 'laura'
  apellidos: 'perez martin'
};

 //copia a todos los niveles (Copia deep)
const usuario2 = JSON.parse(JSON.stringify(usuario));

//solo la primera capa sin referencia (Copia shallow)
var usuario3 = {...foo};
const usuario4 = Object.assign({}, usuario);
```
