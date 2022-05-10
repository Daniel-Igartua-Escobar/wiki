# REACT

[Documentación oficial](https://es.reactjs.org/)

Utiliza JSX(opcional) para simplificar la renderización de los elementos.
## Requisitos

Instalar [node](https://nodejs.org/es/), mejor con nvm.

## COMPONENTES

- De clase
- Funcionales

Los componentes se utilizan como etiquetas html con la primera letra en mayúscula.

Ej:
```js
  <Boton></Boton>
```

Algunos atributos de html que coinciden con palabras reservadas de js utilizan otro nombre,
ej: class className, for htmlFor

Los de clase ya no se utilizan, tenían la ventaja de guardar el estado(valor de las propiedades) del componente. Ahora se 
utilizan los funcionales con hooks para controlar su estado.

Ej: componente de clase

```js
  class Saludo extend React.Component {
    render(){
      return <h1> ¡Hola , {this.props.nombre}! </h1>;
    }
  }
```

Ej: componente funcional

```js
  function Saludo(props) {
    return <h1> ¡Hola , {props.nombre}! </h1>;
  }

  export default Saludo;
```

## STYLES

  Los estilos se pueden pasar por la etiqueta style mediante un objeto, las propiedades de css iran en camel case.
  Ej:

  ```js
  <h1 style={{color: yellow, backgroundColor: 'black'}}></h1>
  ```
 
## PROPS

```js
  let adjetivo = 'Interesante';
  <p>React es {adjetivo}</p>
```

Entre parentesis se pasan las propiedades de js, también se puede ejecutar cualquier instruccion o metodo js entre las llaves.
Las propiedades se pueden pasar de padres a hijos

## Event Listener

## COMO UTILIZAR REACT
Ej: 

```js
  import ReadctDOM from 'react-dom';

  const elemento = <h1>¡Hola, Mundo!</h1>;
  ReactDOM.render(elemnto, document.getElementById('root'));
```


## CREAR APP REACT

npx create-react-app (nombre de la app)

```bash
 npx create-react-app mi-app
```

En la carpeta src crear las subcarpetas:
- components
- stylesheets
- images

## HERRAMIENTAS DE REACT

[Extensión React](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es)

## IMPORTAR COMPONENTES

Dentro del componente
```js
  function Componente() {
    return;
  }
  export default componente
```

En la App
```js
  import Testimonio from './components/Testimonio';
```

o

Dentro del componente
```js
  export function Componente() {
    return;
  }
```

En la App
```js
  import { Testimonio } from './components/Testimonio';
```

De la segunda forma podemos importar varios export que tenga el componente

## HOOKS

Nos ayudan a controlar el estado de los componentes

Ej: 

```js
  import { useState } from 'react';

  //Creamos una constante con 2 valores, el 1º la variable a la que queremos controlar su estado
  //y el 2º será la función que llamaremos para actualizar su estado.
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);  
  };

  <Contador 
    numClics={numClics} />
  <Boton
    texto='Clic'
    esBotonDeClic={true}
    manejarClic={manejarClic} />
  <Boton
    texto='Reiniciar'
    esBotonDeClic={false}
    manejarClic={reiniciarContador} />
```

## PASAR VALORES EN EL INTERIOR DE LA ETIQUETA DE UN COMPONENTE

Actua como si fuese un slot, ejemplo:

Añadir en el componente props.childre
```js
  import React from "react";
  import '../stylesheets/BotonClear.css'

  const BotonClear = (props) => (
    <div 
      className="boton-clear"
      onClick={props.manejarClear}>
      {props.children}
    </div>
  );

  export default BotonClear;
```

Para pasarla los valores, pueden ser etiquetas, texto, etc...
```js
  <BotonClear manejarClear={() => setInput('')}>
    Clear
  </BotonClear>
```

## PASAR METODOS AL COMPONENTE

Añadimos un escuchador de eventos en el componente
```js
  import React from 'react';
  import '../stylesheets/Boton.css'

  function Boton(props) {

    const esOperador = valor => {
      return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
      <div 
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </div>
    );
  }

  export default Boton;
```

Declaramos el metodo y se lo pasamos por la prop
```js
  function App() {

    const [input, setInput] = useState('');

    const agregarInput = val => {
      setInput(input + val);
    };

    return (
      <div className='App'>
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
      </div>
    );
  }
```

## FRAGMENT, retornar varios elementos en un componente

```js
import { Fragment } from 'react';

return (
  <Fragment>
    <TodoList />
    <input />
  </Fragment>
)
```

o

```js
return (
  <>
    <TodoList />
    <input />
  </>
)
```




npm config set registry http://registry.npmjs.org/
npm config set registry https://globaldevtools.bbva.com/artifactory/api/npm/npm-repo