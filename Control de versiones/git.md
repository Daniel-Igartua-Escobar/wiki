# GIT
[Instalar git]( https://git-scm.com/download)

## Comandos generales
| Comando | accion |
|---------|--------|
| git --version | comprobar version |
| git config --global user.name "nombre_usuario" | Configurar usuario |
| git config --global user.email "email_usuario" | Configurar email |
| git config --global --list | Ver configuracion |
| git config -l | Ver toda la configuracion |
| git credential -osxkeychain | Para que no pida el usuario y contraseña |
| git help `comando` | Información de los comandos |
| git init | Iniciar git |
| git status | Muestra el estado de los archivos |
| git status -s | solo muestra los cambios que no estan comiteados |
| git add . | Añade los archivos nuevos y modificados al stage |
| git add -A | Añade todos los archivos al stage incluyendo los eliminados(igual que git add --all) |
| git add `nombre_archivo` | Añade solo ese archivo al stage |
| git add `nombre_carpeta`/ | Añade la carpeta al stage |
| git add *`.css` | Añade los archivos con las extension indicada |
| git add -f `nombre_de_archivo` | fuerza a subir el fichero |
| git commit -m "Mensaje del commit" | Confirmar cambios en repositorio local |
| git commit -m "Mensaje del commit" `nombre_fichero`| hacer commit de un fichero concreto |
| git commit -am "Mensaje del commit" | Para hacer el add junto al commit, solo sirve para archivos que ya fueron añadidos antes con add en otro commit anterior|
| git push | subir cambios a remoto |
| git show `<numero de commit>` | Ver información del commit |
| git show master | Ver información del ultimo commit de esa rama |
| git show HEAD^ | Ver información del anterior commit en el que estamos posicionados |
| git log --oneline -`numero de commits` | Muestra los cambios realizados en los utlimos x commits |
| git checkout `numero_de_commit` | Volver a ese commit |
| git checkout -b `nombre_rama` | Crear una rama a partir de un commit |

## Modificar, borrar y comparar
| Comando | accion |
|---------|--------|
| git commit --amend -m "Nuevo mensaje corregido para el commit" | Rectificar commit |
| git rm -r --cached `node_modules` | eliminar archivos |
| git rm --cached `holamundo.css` | eliminar archivos del stage cuando no hemos realizado ningun commit |
| git reset HEAD `archivo` | eliminar archivo del stage |
| git reset master | eliminar archivo del stage |
| git reset master~2 | eliminar archivo del stage |
| git reset --soft master~3 | borrar todos los cambios del staging area y volver a los del ultimo commit |
| git reset --mixed | borrar todos los cambios del staging area y volver a los del ultimo commit |
| git reset --hard master^ | borrar todos los cambios del staging area y volver a los del ultimo commit |
| git checkout -- `<fichero>` | Revertir los cambios de un archivo que no esta en el stage |
| git branch -d master | Eliminar rama local |
| git push origin --delete `<remote_branchname>` | Eliminar rama remota |
| git diff | Muestra las diferencias con el ultimo commit|
| git diff `<commit>` `<commit>` | Muestra las diferencias con el ultimo commit|


## Ramas
| Comando | accion |
|---------|--------|
| git branch | ver en la rama que nos encontramos |
| git branch `nombre_de_la_rama` | crear nueva rama |
| git branch -m `nombre_de_la_rama` | Renombrar rama |
| git show-branch | ver todas las ramas del proyecto |
| git checkout `rama` | Cambiar de rama |
| git checkout -b `rama` | Crear y cambiar de rama |
| git push -u origin `rama` | subir cambios al repo remoto |
| git pull  |  |
| git fetch |  |
| git diff `source_branch` `target_branch` | Ver diferencias entre 2 ramas |

## Stash
| Comando | accion |
|---------|--------|
| git stash -h | Ayuda del comando stash |
| git stash | guardar cambios en el stash |
| git stash save `"<mensaje>"` | guardar cambios en el stash con un mensaje concreto |
| git stash list | Ver lista de los stash |
| git stash pop | volver a los cambios del ultimo stash y eliminarlo |
| git apply `<numero_de_stash>` | Recuperar un stash concreto sin eliminarlo |
| git stash drop `<numero_de_stash>` | Elimina ese stash de la lista |
| git stash clear | Borra todos los stash guardados |
| git satsh diff `<numero_de_stash>` | Ver diferencias con ese stash |

## Tags
| Comando | accion |
|---------|--------|
| git tag -a v2.0.6 -m "mensaje" | crear tag |
| git push origin --tags | subir tags |
| git tags | ver todas los tags |

## Repos
| Comando | accion |
|---------|--------|
| git remote add origin `<url_del_repo>` | Subir un repo local a uno remoto que esta vacio |
| git clone `<url_del_repo>` | Clonar repo remoto en local |
| git remote -v | Ver todos los repos remotos dados de alta en mi local |

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



## Comandos mas frecuentes
- git fetch --all --prune
- git pull
- git add `archivo`
- git commit -m "remove taboola from iab configuration"
- git push origin `rama`
- git merge `rama`
- git branch -d master (eliminar rama local)



git init

git add .

git commit -m "first commit"

git remote add origin https://github.com/NOMBRE_USUARIO/NOMBRE_PROYECTO.git

git push -u origin master


https://seguro.marca.sta.internet.int/registro/release/v3/?view=recoverPassword&token=33383837efbfbdefbfbdefbfbd791d0d10775e61efbfbd70efbfbd61efbfbd&codSite=2&old=false&url_redirect=&emailUser=suerte17@mailinator.com


sacar rama a partir de un tag
git checkout -b prueba 1.0.0 