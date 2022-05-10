# BBVA COLOMBIA


## MOCK SERVER
Repo: mock-server-gema 
Rama: develop
Comando: npm run build && npm run dev

Modificar region
echo $REGION
export REGION=CO


## APP WEB
Repo: gema-co
Rama: develop
Comando: cells app:serve -c CO/mock.json


## ANDROID
Repo: gema-android-apppack
Rama: colombia-develop


## GENERAR APK
Sacara rama del repo de android y modificar en el jenkisfile la rama por la mia, branch: xxxxx.
En la build del ultimo commit aparece la url del apk. 

## USUARIOS
Utilizar mock o usuarios del excell para test y calidad.
https://docs.google.com/spreadsheets/d/1N7HmkYCt84cKqqo3YK4PwV-oZUd9Y1vA/edit?rtpof=true&sd=true#gid=986385834


## POSTMAN
https://localhost:7050/intersect?path=/contacts-book/v0/contacts&useCase=softoken
https://localhost:7050/region?region=CO



## EJEMPLOS
feature/pending-operations