# Modulos 
## Añadir modulo al html
```html
<script src="index.js" type="module"></script>
```

## Exportar e importar, variables de tipos primitivos, funciones, objetos, clases
```Javascript
export const pi = 3.1416;
```
```Javascript
import { pi } from './pi-module.js';
```

## Exportar e importar importar varias cosas
```Javascript
export function reir() {
  console.log('jajaja');
}

export function reirFuerte() {
  console.log('JAJAJAJAJA');  
}

export function reirSuave() {
  console.log('jeje');
}
```
```Javascript
import { reir, reirFuerte, reirSuave} from './risas.js';

reir();
reirFuerte();
reirSuave();
```

## Exportar e importar los elementos asignando un alias
```Javascript
export function reir() {
  console.log('jajaja');
}

export function reirFuerte() {
  console.log('JAJAJAJAJA');  
}

export function reirSuave() {
  console.log('jeje');
}
```
```Javascript
import * as risas from './risas.js';

risas.reir();
risas.reirFuerte();
risas.reirSuave();
```

## Exportar e importar los elementos en un objeto
```Javascript
function titular(cadena) {
  return `<h1>${cadena}</h1>`;
}
function parrafo(cadena) {
  return `<p>${cadena}</p>`;
}
function salto() {
  return '<br>';
}

export const tags = {
  titular,
  parrafo,
  salto
}
```
```Javascript
import { tags } from './tags.js';

console.log(tags.titular('Hola!'));
console.log(tags.parrafo('Esto es un test de los módulos ES6'));
```

## Export default
```Javascript
function validateEmail(email) {
  if(email.indexOf('@') != -1) {
    return true;
  }
  return false
}

export default validateEmail
```
```Javascript
import validateEmail from './validate-email-function.js';
```

