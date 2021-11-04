# Soluciones funcionales

## Requisitos

- Tener diseño cerrado
- Servicios globales(APIS)
- Comprobar que existen los bgadp
- Descomponentizacion, ppt
- Solicitar por correo

## Crear y subir solución funcional

- Instalar ufe cli

Crear la solución funcional
- ufe create

Crear las páginas
- ufe init

Verificar que esta correcto
- ufe check

ufe build

# Crear App de ejemplo para probar que funcione

- Con cells cli

# Para ver la solución funcional en amazon

Cuando pase la build entrar en jenkins, console, buscar index.html y al final entrar a la url

# Repositorios soluciones funcionales
UFE_DEMO_APPLICATIONS
BTGE_UFE_CATALOG


# Catálogo de componentes
- web components(el de la derecha)
bbva-web-tal

# Render añadir estructura pequeña o separar en métodos get

# Páginas
cells-template-panle-drawer

- animation

Evento:
- cells-template-content-scroll

# Eventos de página
Subscribe a evento de otra página
- subscribe
Sobrescribe el eventp y lanza otro
- subscribetal 

# IMAGENES

- Coger de microilustraciones(componente de catálogo)








# Apuntes

- Documentación: https://docs.google.com/document/d/1RDFuUUUUP3oPrG3gZGX8cvbMDC09KlmPTXh-SbyiTvU/edit#

- Instalar ultimas versiones de node, cells y ufe cli
# Para lanzar la App y que funcionen las SF añadir -b

- cells app:serve -c PE/test.json -b

# Soluciones en  la App

- Carpeta elements portalizacion

# Modificar SF

- Descargar repo de SF, sacar rama feature, hacer cambios, rm -rf dist, ufe build

# Probar solucion local en App

- Lanzar comando ufe add ruta_local_SF
ej: ufe add ../bbva-btge-bussiness-account
