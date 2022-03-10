# REACT

[Documentación oficial](https://es.reactjs.org/)

React utiliza JSX para renderizar los templates.
## JSX

### Expresiones JS

Las expresiones JS se pasan a través de las {}.

```js
  const name = 'Josh Perez';
  const element = <h1>Hello, {name}</h1>;

  ReactDOM.render(
    element,
    document.getElementById('root')
  );
```

```js
const element = <div tabIndex="0"></div>;
También puedes usar llaves para insertar una expresión JavaScript en un atributo:

const element = <img src={user.avatarUrl}></img>;
```

### Variables
