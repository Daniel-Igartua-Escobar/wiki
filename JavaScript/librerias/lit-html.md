# lit-html
[Documentación](https://lit-html.polymer-project.org/)
lit-html permite crear plantillas HTML con javascript y solo vuele a renderizar las partes que han cambiado.

Instalar
``` bash
   npm install lit-html
```

```js
  import {html, render} from 'lit-html';
```

Ejemplo:
```js
  import {html, render} from 'lit-html';

  // A lit-html template uses the `html` template tag:
  let sayHello = (name) => html`<h1>Hello ${name}</h1>`;

  // It's rendered with the `render()` function:
  render(sayHello('World'), document.body);

  // And re-renders only update the data that changed, without VDOM diffing!
  render(sayHello('Everyone'), document.body);
```



