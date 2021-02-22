# CSS
ES un lenguaje de hojas de estilo.

# Añadir estilos
```html
    <!-- Inline, en el atributo style de la etiqueta -->
    <p style="color: red;"></p>

    <!-- Interno -->
    <style>
      p {
        background-color: yellow;
      }
    </style>

    <!-- Externo, link a un archivo css -->
    <link rel="stylesheet" href="style.css">


```


## Selectores
```css
/* Etiqueta */
h1 {
  color: black;
}

/* Clase */
.my-clase {
  font-size: 14px;
}

/* Id */
#miId {
  text-align: left;
}

/* Atributo */
img[src] 

/* Pseudoclase */

```

```css
/*estilos a varias etiquetas*/
h1, h2 {
  color: black;
}
/*estilos a todos los enlaces que estan dentro de un p*/
p a {
  font-size: 14px;
}
```

## estilos en cascada, herencia y sobreescritura
```css
/*Todo lo que contenga el body tendra ese estilo a menos que se especifique(herencia)*/
body {
  font-family: Arial;
}
/*En este caso los estilos del p tienen prioridad por especificidad*/
p {
  font-family: Verdana;
}
```

## Variables css
```css
:root {
  --my-var: brown;
}

.dos {
  color: var(--my-var, red); /* Rojo (red) si --my-var no esta definida */
}
```


