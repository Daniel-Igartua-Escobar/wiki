# DTD

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE biblioteca [
    <!ELEMENT BIBLIOTECA (LIBRO+)>
    <!ELEMENT LIBRO (TITULO, AUTOR*, ANYO?, EDITORIAL?)>
    <!ATTLIST LIBRO COD CDATA #REQUIRED>
    <!ELEMENT AUTOR (#PCDATA)>
    <!ELEMENT TITULO (#PCDATA)>
    <!ELEMENT EDITORIAL (#PCDATA)>
    <!ELEMENT ANYO (#PCDATA)>
]>

<BIBLIOTECA>
 <LIBRO COD="1">
    <TITULO>XML para todos</TITULO>
    <AUTOR>Sergio Lujan Mora</AUTOR>
    <ANYO>2001</ANYO>
    <EDITORIAL>UA Prensa</EDITORIAL>
 </LIBRO>
 <LIBRO COD="11">
    <TITULO>Como aprobar una oposición</TITULO>
    <AUTOR>Marisa Zayas Fornieles</AUTOR>
    <AUTOR>Sergio Lujan Mora</AUTOR>
    <ANYO>1999</ANYO>
    <EDITORIAL>Prensa Editorial</EDITORIAL>
 </LIBRO>
</BIBLIOTECA>


<!ELEMENT A EMPTY>
  <unionEuropea />
<!ELEMENT A ANY>

<!ELEMENT A (#PCDATA)>
    <EDITORIAL>Prensa Editorial</EDITORIAL>

<alumno>Olga Velarde Cobo</alumno>
<!ELEMENT A (B, C)>
 <LIBRO>
    <TITULO>XML para todos</TITULO>
    <AUTOR>Sergio Lujan Mora</AUTOR>
</LIBRO>




opción, ?
<!ELEMENT telefono (trabajo?, casa )>
 <TELEFONO>
    <CASA>XML para todos</CASA>
</TELEFONO>

uno-o-más, +
<!ELEMENT provincia (nombre, (cp, ciudad)+ )>

cero-o-mas, *
<!ELEMENT provincia (nombre, (cp, ciudad)* )>

Operador de elección
<!ELEMENT provincia (nombre, (cp | ciudad) )>


ATRIBUTOS
----------

-Tipo de atributo:

Enumeracion
<!ATTLIST fecha dia_semana (lunes|martes|miércoles|jueves|viernes|sábado|domingo) #REQUIRED>

CDATA
<!ATTLIST LIBRO COD CDATA #REQUIRED>
 <LIBRO COD="1">

ID //no puede tener espacios ni ser un numero. _ o letras     unicos O LETRA Y NUMERO
<!ATTLIST cuadro titulo ID #REQUIRED>
<cuadro titulo="Adán_y_Eva_1"/>
IDREF

NMTOKEN
palabra compuesta
<!ATTLIST jugador nombre NMTOKENS #REQUIRED>
<!ATTLIST jugador codigo ID #REQUIRED>
 <jugador nombre="Edison Arantes do Nascimento" codigo="ean" />


  <!ELEMENT futbol ((jugador|equipo)*)>
  <!ELEMENT jugador EMPTY>
  <!ATTLIST jugador nombre NMTOKENS #REQUIRED>
  <!ATTLIST jugador codigo ID #REQUIRED>
  <!ELEMENT equipo EMPTY>
  <!ATTLIST equipo nombre CDATA #REQUIRED>
  <!ATTLIST equipo jugadores IDREFS #IMPLIED>

<futbol>
  <jugador nombre="Alfredo Di Stéfano" codigo="ads"/>
  <jugador nombre="Edison Arantes do Nascimento" codigo="ean" />
  <jugador nombre="Diego Armando Maradona" codigo="dam" />
  <jugador nombre="Johan Cruyff" codigo="jc" />
  <equipo nombre="Società Sportiva Calcio Napoli" jugadores="dam" />
  <equipo nombre="Futbol Club Barcelona" jugadores="jc dam" />
</futbol>

- Requerido o no:

#IMPLIED        Es opcional
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE persona [
  <!ELEMENT persona EMPTY>
  <!ATTLIST persona nombre CDATA #IMPLIED>
]>

<persona />


#REQUIRED       Es obligatorio
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE persona [
  <!ELEMENT persona EMPTY>
  <!ATTLIST persona nombre CDATA #REQUIRED>
]>

<persona nombre="paco"/>


#FIXED          ES fijo


<!ELEMENT alumno (nombre, apellidos, direccion)>
<!ATTLIST alumno edad CDATA #REQUIRED>
<!ELEMENT nombre (#PCDATA)>
<!ELEMENT apellidos (#PCDATA)>
<!ELEMENT dirección (#PCDATA)>
<alumno edad="15">
    <nombre>Olga</nombre> 
    <apellidos>Velarde Cobo</apellidos>
    <dirección>El Percebe 13</dirección>
</alumno>
