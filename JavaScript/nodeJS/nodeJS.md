# Node JS

[documentacion](https://medium.com/techwomenc/crea-una-api-con-nodejs-and-mongodb-f315c73e28fe)  
[documentacion](https://medium.com/williambastidasblog/estructura-de-una-api-rest-con-nodejs-express-y-mongodb-cdd97637b18b)

Crear config del proyecto package.json
- npm init

Ejecutar archivo
- node src-index.js
- npm run start

Dependencias útiles
- expressJS: Nos permite trabajar con http y tener sistemas de rutas
- mongoose: Nos permite trabajar con la base de datos MongoDB.
- body-parser: Nos permite convertir los datos que nos llegan en las peticiones al servidor en objetos JSON

- nodemon: Reinicia el servidor automáticamente ante cualquier cambio

Instalar:
- npm install express mongoose body-parser
- npm install nodemon -D


Creamos archivo index.js con la config para crear el servidor
```javaScript
var express    = require('express');        // Utilizaremos express, aqui lo mandamos llamar

var app        = express();                 // definimos la app usando express
var bodyParser = require('body-parser'); //

// configuramos la app para que use bodyParser(), esto nos dejara usar la informacion de los POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // seteamos el puerto

var router = express.Router();   //Creamos el router de express

// Seteamos la ruta principal
router.get('/', function(req, res) {
    res.json({ message: 'Hooolaa :)'});
});

// Le decimos a la aplicación que utilize las rutas que agregamos
app.use('/api', router);

// Iniciamos el servidor
app.listen(port);
console.log('Aplicación creada en el puerto: ' + port);
```

Lo ejecutamos y podemos probarlo en postman
- Llamanda Get localhost:8080/api


Conectamos la base de datos MongoDB con el servidor, añadimos al index.js
```javaScript
var mongoose = require('mongoose'); // Utilizamos la librería de mongoose
//Creamos la conexión con 
mongoose.connect('mongodb://usuario:contraseña@host:puerto/nombre_BD');
```















```js
router.get('/', (req, res) => {
  //res.send('Hello world');  //Enviar un string
  res.json({"Title": "hello world"});  //Enviar un JSON
})
```

- bcrypt-nodejs: Librería para encriptar contraseñas con el metodo bcrypt.
- connect-multiparty: Librería para subir ficheros.
- jwt-simple: Librería para la gestión de tokens.
- moment: Librería para trabajar con fechar.
- mongoose-pagination: Para paginar los resultados de una busqueda en MongoDB.


- npm install bcrypt-nodejs body-parser connect-multiparty express jwt-simple moment mongoose mongoose-pagination
- npm install nodemon -D
