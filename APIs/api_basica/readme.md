# Api
Api básica con nodeJS que permite obtener, guardar, actualizar y borrar datos(CRUD).

## Módulos

- ExpressJS: Este módulo de Node nos permitirá trabajar con un servidor web, rutas, etc..
- morgan: muestra las peticiones al servidor en la consola.
- fetch: nos permite hacer llamadas con fetch.

- nodemon: actualiza el servidor automáticamnete.

```
npm install express morgan fetch
npm install nodemon -D
```

- npm run start

## Rutas
localhost:3000/api/movies
- Datos obtenidos de un JSON local
localhost:3000/api/users 
- Datos obtenidos mediante llamada fetch a https://jsonplaceholder.typicode.com/users

## Postman
Con postman podemos probar las peticiones.

### GET
Otener datos, localhost:3000/api/movies.

### POST
Enviar datos, localhost:3000/api/movies.

- Headers añadimos:
    - KEY: Content-Type 
    - VALUE: application/json
- Body, seleccionamos raw:
```json
Si enviamos todos los campos
  {
    "title": "Toy Store",
    "director": "pedro",
    "year": 2004,
    "rating": 9.7
  }
  // saved

Si falta algún campo
  {
    "title": "Toy Store",
    "director": "pedro",
    "year": 2004
  }
  // Wrong Request
```

### PUT
Actualizar datos, localhost:3000/api/movies/:id  
EJ: localhost:3000/api/movies/1

- Headers añadimos:
    - KEY: Content-Type 
    - VALUE: application/json
- Body, seleccionamos raw:
```json
  {
    "title": "Toy Store",
    "director": "suerte",
    "year": 2004,
    "rating": 9.7
  }
```

### DELETE
Borrar datos, localhost:3000/api/movies/:id
EJ: localhost:3000/api/movies/1
