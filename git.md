# GIT

## Instalar git
[Página oficial de git]( https://git-scm.com/download)

## Comprobar version
````
git --version
````

## Configurar usuario
````
git config --global user.name "nombre_usuario"
git config --global user.email "email_usuario"
git config --global --list
git help [comando a buscar]
````



ver estado
- git status -s (solo muestra los cambios que no estan comiteados)

Para subir un commit
- git commit -am "Mensaje del commit"


## Comandos generales

| Comando | accion |
|---------|--------|
| git init | Iniciar git |
| git status | Muestra el estado de los archivos |
| git add . | Añade los archivos nuevos y modificados al stage |
| git add -A | Añade todos los archivos al stage incluyendo los eliminados(igual que git add -all) |
| git add `nombre_archivo` | Añade solo ese archivo al stage |
| git add `nombre_carpeta`/ | Añade la carpeta al stage |
| git add *`.css` | Añade los archivos con las extension indicada |
| git reset `holamundo.css` | Quitar archivo del stage |
| git commit -m "Mensaje del commit" | Confirmar cambios en repositorio local |
| git log --oneline | Muestra los cambios realizados |
| git commit --amend -m "Nuevo mensaje corregido para el commit" | Rectificar commit |
| git checkout `numero_de_commit` | Volver a ese commit |
| git help `nombre_del_comando` | Muestra informacion sobre el comando |
| git diff | Muestra las diferencias con el ultimo commit|
| git rm -r --cached `node_modules` | eliminar archivos |

## Comandos ramas

| Comando | accion |
|---------|--------|
| git init | Iniciar git |


## .gitignore
- Herramienta para autogenerar archivo gitignore [gitignore.io](https://www.toptal.com/developers/gitignore)

