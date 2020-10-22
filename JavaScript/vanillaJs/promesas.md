# Promesas

```javascript
function devuelvePromesa() {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      let todoCorrecto = true;
      if (todoCorrecto) {
        resolve('Todo ha ido bien');
      } else {
        reject('Algo ha fallado');
      }
    }, 2000)
  })
}

devuelvePromesa()
  .then( respuesta => console.log(respuesta) )
  .catch( error => console.log(error) )


hacerAlgoPromesa('documentar un tema')
.then(() => hacerAlgoPromesa('escribir el artículo'))
.then(() => hacerAlgoPromesa('publicar en desarrolloweb.com'))
.then(() => hacerAlgoPromesa('...compartís en vuestras redes sociales'))
```
