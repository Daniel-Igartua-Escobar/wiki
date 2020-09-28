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

## Comandos generales

| Comando | accion |
|---------|--------|
| git init | Iniciar git |
| git status | Muestra el estado de los archivos |
| git status -s | solo muestra los cambios que no estan comiteados |
| git add . | Añade los archivos nuevos y modificados al stage |
| git add -A | Añade todos los archivos al stage incluyendo los eliminados(igual que git add -all) |
| git add `nombre_archivo` | Añade solo ese archivo al stage |
| git add `nombre_carpeta`/ | Añade la carpeta al stage |
| git add *`.css` | Añade los archivos con las extension indicada |
| git add -f `nombre_de_archivo` | fuerza a subir el fichero |
| git reset `holamundo.css` | Quitar archivo del stage |
| git commit -m "Mensaje del commit" | Confirmar cambios en repositorio local |
| git commit -m "Mensaje del commit" `nombre_fichero`| hacer commit de un fichero concreto |
| git commit -am "Mensaje del commit" | Para hacer el add junto al commit, solo sirve para archivos que ya fueron añadidos antes con add en otro commit anterior|
| git log --oneline | Muestra los cambios realizados |
| git commit --amend -m "Nuevo mensaje corregido para el commit" | Rectificar commit |
| git checkout `numero_de_commit` | Volver a ese commit |
| git reset --hard | borrar todos los cambios del staging area y volver a los del ultimo commit |
| git help `nombre_del_comando` | Muestra informacion sobre el comando |
| git diff | Muestra las diferencias con el ultimo commit|
| git rm -r --cached `node_modules` | eliminar archivos |
| git remote add origin `url_del_repo` | subir un repo local a uno remoto que esta vacio |
| git clone `url_del_repo` | clonar repo remoto en local |
| git push -u origin master | subir cambios al repo remoto |
| git stash | guardar cambios en el stash |
| git stash pop | volver a esos cambios |
| git status --show-stash | ver todos los stash guardados |

## Borrar

| Comando | accion |
|---------|--------|
| git rm --cached `holamundo.css` | Quitar archivo del stage cuando no hemos realizado ningun commit |
| git reset HEAD `archivo` | eliminar archivo del stage |

## Ramas

| Comando | accion |
|---------|--------|
| git branch | ver en la rama que nos encontramos |
| git branch `nombre_de_la_rama` | crear nueva rama |
| git show-branch | ver todas las ramas del proyecto |
git push origin `rama`
git diff `source_branch` `target_branch`

## Tags

| Comando | accion |
|---------|--------|
| git tag -a v2.0.6 -m "mensaje" | crear tag |
| git push origin --tags | subir tags |
| git tags | ver todas los tags |
  


## .gitignore
- Herramienta para autogenerar archivo gitignore [gitignore.io](https://www.toptal.com/developers/gitignore)

## Nomenclatura de ramas
- feature (ramas de características)
- release (ramas de lanzamiento)
- hotfix (ramas de revisiones)

## Nomenclatura de commits

  type:
  - feat: Una nueva caracteristica
  - fix: Se soluciono un bug.
  - docs: Se realizaron cambios en la documentacion
  - style: Se aplico formato, comas y puntos faltantes, etc. Sin cambios en el codigo
  - refactor: Refactorizacion del codigo en produccion
  - test: Se añadieron pruebas, refactorizacion de pruebas. Sin cambios en el codigo
  - chore: Actualizacion de tareas de build, configuracion del admin. de paquetes. Sin cambios en el codigo

type(scoup): comment [jira_number]
* utilizar verbos en tiempo imperativo y no acabar con punto los comentarios

Ejemplo: feat(archivo_modificado): add, change, ..... [numero_tarjeta_jira]



## Subir cambios y mergear ramas
- git fetch --all --prune
- git pull
- git add `archivo`
- git commit -m "remove taboola from iab configuration"
- git push -u origin `rama`
- git merge `rama`
- git branch -d master (eliminar rama local)