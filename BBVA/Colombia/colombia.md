# BBVA COLOMBIA


## MOCK SERVER
Repo: mock-server-gema 
Rama: develop
Comando: npm run build && npm run dev

Modificar region
echo $REGION
export REGION=CO

## HEROKU
Cambiar pais
https://pole-test.herokuapp.com/region?region=CO

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

## CODIGO IMPUTAR BBVA
17588

## GRUPO COLOMBIA
BBVA_CO_GEMA_DEVELOPERS

## USUARIOS
00101265 JOAN0001 pibee002
00101265 MENUR009 pibee003

# NPM LINK
Monorepo, enlazar componente:
  Hacer `npm link` en la consola en el repo en el componente.
  Hacer `npm link nombre_componente` en la App.
  Cuando terminemos hacer `npm unlink`.