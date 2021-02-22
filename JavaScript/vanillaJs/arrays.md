# Arrays
[documentación](https://devdocs.io/javascript/global_objects/array)
[documentación2](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)

Crear array
```javaScript
var fruits = ['Apple', 'Banana'];
```
Acceder por indice
```javaScript
fruits[0]
fruits[fruits.length-1];
```

Recorrer array
```javaScript
fruits.forEach((item, index, array) => {
  console.log(item, index);
});
```

## Copiar Array sin referencia
 ```javaScript
 var foo = ['red', 'blue'];

 //copia a todos los niveles (Copia deep)
var bar = JSON.parse(JSON.stringify(foo))

//solo la primera capa sin referencia (Copia shallow)
var bar2 = [...foo];
var bar3 = foo.slice();
var bar4 = Array.from(foo);
var bar5 = [].concat(foo);
```

