# Entrevista

## Web components
Son un conjunto de tecnologías que nos permite crear componentes(etiquetas html personalizadas).
- Custom elements(Nos permite definir el elemento)
- Shadow DOM(encapsula al elemento)
- HTML template(templates y slot)
- ES modules

Un componente es un bloque de código que se representa con una etiqueta html reutilizable.
- Ciclo de vida: 
    - constructor(cuando se crea el componente)
    - connectedCallback(cuando se inyecta en el dom)
    - disconnectedCallback(cuando se desconecta del dom)
    - adoptedCallback(cuando es adoptado en otro documento)
    - attributeChangedCallback(cuando cambia un atributo)

## Polymer 2
- dom-module(definir el componente)
- Binding [[]] (a los atributos se añade $, class$=[[]])
- doble Binding {{}}, notify" a "true
- :: (doble binding a elementos nativos de html o web components, <input value="{{propiedadBindeada::input}}">)
- on- (eventos)
- propiedades:
    - type(Number, String,  Boolean, Array, Object, Date) Array y object notacion JSON
    - reflectToAttribute(sirve para reflejar el cambio de la propiedad en el atributo de la etiqueta)
    - readOnly(desemfuera no puede cambiarse el valor)
    - notify(notifica el cambio al padre, doble binding)
    - computed(invoca a una funcion que devuelve el valor en la propiedad, cuando cambian 2 propiedades)
    - observer(una funcion que se ejecuta cuando cambia el valor de la propiedad, parametros valor actual, valor antiguo)
- observers complejos se declaran en **static get observers**, permite observar varias propiedades, tambien es para los arrays y propiedades profundas de los objetos.
- static get is()
- static get properties()
- static get observers()
- constructor()
- ready()

- Ciclo de vida: 
    - ready (igual que connectedCallback, pero solo se ejecuta una vez)
- bower como gestor de dependencias
- Polyfills(compatibilidad con navegadores antiguos)
## Polymer 3
- npm como gestor de dependencias
- imports de ES6 modules

## lit-html
- Permite esribit html dentro de js
- Genera rápido los templates
- Se actualiza muy rápido por el virtual dom
- Ocupa menos de 2KB(kilobyte)
- El coste de actualización del template depende del número de nodos dinámicos.

## Lit-element
- virtual dom, mediante lit-html
- import { LitElement, html, css } from 'lit-element';
- static get properties()
- constructor()
- static get styles()
- render() {
    return html`
      <p>Soy My Element</p>
    `;
  }
- updated
- @, ., ?,


## SPA
Es una APP web que no recarga el navegador, es una sola pagina que cambia entre las vistas.
Ventajas: 
- MVC, Modelos, vistas, controladores
- Carga muy rapido
Desventajas: 
- Solo un punto de acceso
- Seguridad, el cliente tiene todo el código hay que implementarle sistema de routing

## PWA
Es una app web que se puede utilizar en cualquier dispositivo, android, ios, corre en el navegador, puede ser una spa o tener varias paginas.
- Instalables
- Responsive
- Service worker
- 

## Virtual dom y shadom dom
- Virtual dom por ejemplo lo utiliza lit-element gracias a lit-html(libreria) y consiste en que se crea una copia virtual del dom y registra las partes que se modifican asi en lugar de renderizar el dom por completo solo renderiza el nodo que se ha modificado.

- Shadow dom crea un árbol dentro del dom que es independiente y permite la encapsulación de pequeñas partes del documento.


## Patrones de diseño
Son unas técnicas para resolver problemas comunes en el desarrollo de software.
- Singleton(nos permite tener una solo instancia de un tipo de objeto)

## Monohilo
call stack, Event Loop, pila del navegador

## Service worker
Estan entre el navegador y la red, cuando hacemos una peticion y no tenemos red nos sirve esos daros siempre y cuando los tenga.

## Web Workers
Permite que se ejecuten scripts en hilos en segundoi plano.

## Reduce arrays js
Nos reduce el array a un valor, ((acc,valor actual, i, array), valor inicial)
sumar todos los elementos de un array

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