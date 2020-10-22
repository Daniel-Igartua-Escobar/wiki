# MongoDB

(Instalacion)[https://docs.mongodb.com/manual/installation/]
(documentacion)[https://manuais.iessanclemente.net/index.php/Node.js_y_MongoDB]

macOS
- brew tap mongodb/brew
- brew install mongodb-community@4.4

Iniciar MongoDB
- brew services start mongodb-community@4.4

Parar MongoDB
- brew services stop mongodb-community@4.4

Acceder a la shel de MongoDB
- mongo
Para salir
- exit

Primeramente nos conectamos a mongo
- mongo

Nos conectamos a la base de datos '''admin''' y creamos un usuario nuevo, por ejemplo con el nombre de '''admin''' o el que nosotros deseemos y con '''privilegios administrativos (root)''':
- use admin

- db.createUser(
{
   user: "admin",
   pwd: "abc123.",
   roles: [ "root" ]
}
)

A partir de este momento el nuevo usuario podrá usarse para loguearse en la base de datos MongoDB con el siguiente comando:
- mongo -u username -p password --authenticationDatabase admin mydatabase

Ver bases de datos
- show databases

Usar una based de datos
- use admin

Ej: Cambiamos a base de datos
- use pruebas

Creamos un usuario
- db.createUser(
{
user: "pruebas",
pwd: "abc123.",
roles: ["dbOwner"]
  }
)

Creamos otro
- db.createUser(
{
  user: "pepe",
  pwd: "abc123",
  roles: [ 
            { role: "readWrite", db: "pruebas" }
          ]
}
)

Borrar un usuario, primero entramos a la base de datos y lo borramos
- use pruebas
- db.dropUser("pepe")

Comprobar en que base de datos estamos
- db

ver estadisticas
- db.stats()

Ayuda
- db.help()

Crea la tabla personas y añade una persona. save() o insert()
- db.personas.save({nombre:"Pepito Perez",localidad:"Santiago de Compostela",provincia:"A Coruña"})

ver colecciones
- show collections

ver que contiene la coleccion
- db.personas.find()
- db.personas.find().pretty()
- db.personas.find().toArray()
- db.personas.find().limit(2).toArray()

- db.personas.find({"provincia":"A Coruña"}).toArray()
- db.personas.find({"provincia":{$gte:"A"}}).toArray()
- db.personas.find({},{"nombre":true,"localidad":true}).toArray()
- db.personas.find({},{"nombre":true,"localidad":true,"_id":false}).toArray()

- db.personas.remove({"provincia":"Pontevedra"})