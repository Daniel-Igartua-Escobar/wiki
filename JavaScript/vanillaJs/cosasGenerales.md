# Cosas generales


## Métodos para pasar el contexto
```JavaScript
//bind
bind(obj)
//call
call(obj, argument1, argument2, ...)
//apply
aplly(obj, [argument1, argument2, ...])
```


## hoisting
Javascript hace dos pasadas por el código, en la primera almacena todas las variables y funciones que han sido declaradas en memoria
(no en su inicializacion).
```javascript
var x = 5;
(function () {
    console.log("x:", x); // no obtenemos '5' sino 'undefined'
    var x = 10;
    console.log("x:", x); // 10
}());

var x = 5;

(function () {
    var x; // Se elevo la declaración
    console.log("x:", x); // undefined
    x = 10;
    console.log("x:", x); // 10
}());
```
