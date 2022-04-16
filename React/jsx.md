# JSX

Es una mezcla de etiquetas html y js creado por facebook para facilitar la creacion de los elementos en react.
Ej:
```js
const element = <h1>Hello, world!</h1>;
```

Entre las {} se puede meter cualquier expresion js
```js
  const name = 'Josh Perez';
  const element = <h1>Hello, {name}</h1>;

  ReactDOM.render(
    element,
    document.getElementById('root')
  );
```

 Atributos con JSX
 ```JS
 const element = <a href="https://www.reactjs.org"> link </a>;
 const element = <img src={user.avatarUrl}></img>;
 ```