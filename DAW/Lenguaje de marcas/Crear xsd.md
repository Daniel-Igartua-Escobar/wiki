# XSD

Ejemplo xml

<?xml version="1.0"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>

Ejemplo dtd

<!ELEMENT note (to, from, heading, body)>
<!ELEMENT to (#PCDATA)>
<!ELEMENT from (#PCDATA)>
<!ELEMENT heading (#PCDATA)>
<!ELEMENT body (#PCDATA)>

Ejemplo xsd
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
targetNamespace="https://www.w3schools.com"
xmlns="https://www.w3schools.com"
elementFormDefault="qualified">

<xs:element name="note">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="to" type="xs:string"/>
      <xs:element name="from" type="xs:string"/>
      <xs:element name="heading" type="xs:string"/>
      <xs:element name="body" type="xs:string"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>

</xs:schema>



## Documentacion

Definir un elemento simple es:
<xs:element name="xxx" type="yyy"/>

Ej:
<lastname>Refsnes</lastname>
<age>36</age>
<dateborn>1970-03-27</dateborn>

<xs:element name="lastname" type="xs:string"/>
<xs:element name="age" type="xs:integer"/>
<xs:element name="dateborn" type="xs:date"/>

Tipos de datos:
string, se corresponde con una cadena de caracteres UNICODE.
boolean, representa valores lógicos, es decir que solo pueden tomar dos valores, true o false.
integer, número entero positivo o negativo.
positiveInteger, número entero positivo.
negativeInteger, número entero negativo.
decimal, número decimal, por ejemplo, 8,97.
dateTime, representa una fecha y hora absolutas.
duration, representa una duración de tiempo expresado en años, meses, días, horas, minutos segundos. El formato utilizado es: PnYnMnDTnHnMnS. Por ejemplo para representar una duración de 2 años, 4 meses, 3 días, 5 horas, 6 minutos y 10 segundos habría que poner: P2Y4M3DT5H6M7S. Se pueden omitir los valores nulos, luego una duración de 2 años será P2Y. Para indicar una duración negativa se pone un signo – precediendo a la P.
time, hora en el formato hh:mm:ss.
date, fecha en formato CCYY-MM-DD.
gYearMonth, representa un mes de un año determinado mediante el formato CCYY-MM.
gYear, indica un año gregoriano, el formato usado es CCYY.
gMonthDay, representa un día de un mes mediante el formato –MM-DD.
gDay, indica el ordinal del día del mes mediante el formato –DD, es decir el 4º día del mes será –04.
gMonth, representa el mes mediante el formato –MM. Por ejemplo, febrero es –02.
anyURI, representa una URI.
language, representa los identificadores de lenguaje, sus valores están definidos en RFC 1766.
ID, IDREF, ENTITY, NOTATION, MTOKEN. Representan lo mismo que en los DTD's 


Rectricciones a tipos de datos
length, minlength, maxlentgh: Longitud del tipo de datos.
enumeration: Restringe a un determinado conjunto de valores.
whitespace: Define el tratamiento de espacios (preserve/replace, collapse).
(max/min)(In/Ex)clusive: Límites superiores/inferiores del tipo de datos. Cuando son Inclusive el valor que se determine es parte del conjunto de valores válidos para el dato, mientras que cuando se utiliza Exclusive, el valor dado no pertenece al conjunto de valores válidos.
totalDigits, fractionDigits: número de dígitos totales y decimales de un número decimal.
pattern: Permite construir máscaras que han de cumplir los datos de un elemento. La siguiente tabla muestra algunos de los caracteres que tienen un significado especial para la generación de las máscaras.

1. Creación de una cadena de texto con una longitud máxima de 9 caracteres y dos valores posibles.
<xs:simpleType name="estado">
    <xs:restriction base="xs:string">
        <xs:maxLength value="9"/>
        <xs:enumeration value="conectado"/>
        <xs:enumeration value="ocupado"/>
    </xs:restriction>
</xs:simpleType>

2. Creación de un elemento en el que se respetan los espacios tal y como se han introducido.

<xs:simpleType name="nombre">
    <xs:restriction base="xs:string">
        <xs:whitespace value="preserve"/>
    </xs:restriction>
</xs:simpleType>

3. Creación de un elemento calificaciones de dos dígitos cuyo valor es un número entero comprendido entre 1 y 10, ambos inclusive.

<xs:simpleType name="calificaciones">
    <xs:restriction base="xs:integer">
        <xs:totalDigits value="2"/>
        <xs:minExclusive value="0"/>
        <xs:maxInclusive value="10"/>
    </xs:restriction>
</xs:simpleType>

4. Creación de la máscara de un DNI mediante pattern.

<xs:simpleType name="dni">
    <xs:restriction base="xs:string">
        <xs:pattern value="[0-9] [0-9] [0-9] [0-9] [0-9] [0-9] [0-9] [0-9] [A-Z]"/>
    </xs:restriction>
</xs:simpleType>

- Elementos para hacer patrones:

Patrón	Significado
[A-Z a-z]	Letra.
[A-Z]	Letra mayúscula.
[a-z]	Letra minúscula.
[0-9]	Dígitos decimales.
\D	Cualquier carácter excepto un dígito decimal.
(A)	Cadena que coincide con A.
A | B	Cadena que es igual a la cadena A o a la B.
AB	Cadena que es la concatenación de las cadenas A y B.
A?	Cero o una vez la cadena A.
A+	Una o más veces la cadena A.
A*	Cero o más veces la cadena A.
[abcd]	Alguno de los caracteres que están entre corchetes.
[^abcd]	Cualquier carácter que no esté entre corchetes.
\t	Tabulación.



Valor por defecto
<xs:element name="color" type="xs:string" default="red"/>

Valor fijo
<xs:element name="color" type="xs:string" fixed="red"/>

Atributo
<xs:attribute name="xxx" type="yyy"/>

- Tipo: 
xs:cadena
xs: decimal
xs:entero
xs: booleano
xs:fecha
xs:tiempo

Ej:
<lastname lang="EN">Smith</lastname>
<xs:attribute name="lang" type="xs:string"/>

Valor por defecto
<xs:attribute name="lang" type="xs:string" default="EN"/>

Valor fijo
<xs:attribute name="lang" type="xs:string" fixed="EN"/>

Opcionales por defecto, obligatorios añadir use required
<xs:attribute name="lang" type="xs:string" use="required"/>



Restricciones sobre el contenido:

- Restriccion para numero entre dos valores
ej: elemento llamado "edad" con una restricción. El valor de la edad no puede ser inferior a 0 ni superior a 120
<xs:element name="age">
  <xs:simpleType>
    <xs:restriction base="xs:integer">
      <xs:minInclusive value="0"/>
      <xs:maxInclusive value="120"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>

- Restriccion para un enum concreto de valores
<xs:element name="car">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:enumeration value="Audi"/>
      <xs:enumeration value="Golf"/>
      <xs:enumeration value="BMW"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>

- Restriccion pattern Una minuscula
<xs:element name="letter">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:pattern value="[a-z]"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>

- Restriccion 3 mayusculas
<xs:element name="initials">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:pattern value="[A-Z][A-Z][A-Z]"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>

- Restriccion 8 caracteres
<xs:element name="password">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:pattern value="[a-zA-Z0-9]{8}"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>

- Restriccion un valor u otro
<xs:element name="gender">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:pattern value="male|female"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>


- 8 caracteres
<xs:element name="password">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:length value="8"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>

- Minimo y maximo de caracteres
<xs:element name="password">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:minLength value="5"/>
      <xs:maxLength value="8"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>





## Elementos complejos

- Atributo
<product pid="1345"/>

<xs:element name="product">
  <xs:complexType>
    <xs:complexContent>
      <xs:restriction base="xs:integer">
        <xs:attribute name="prodid" type="xs:positiveInteger"/>
      </xs:restriction>
    </xs:complexContent>
  </xs:complexType>
</xs:element>

o 

<xs:element name="product">
  <xs:complexType>
    <xs:attribute name="prodid" type="xs:positiveInteger"/>
  </xs:complexType>
</xs:element>

- Contiene elementos
<employee>
  <firstname>John</firstname>
  <lastname>Smith</lastname>
</employee>

<xs:element name="employee">
  <xs:complexType>//Contiene elementos
    <xs:sequence>//Tienen que ir en ese orden las etiquetas
      <xs:element name="firstname" type="xs:string"/>
      <xs:element name="lastname" type="xs:string"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>


- Atirbuto y texto
<shoesize country="france">35</shoesize>

<xs:element name="shoesize">
  <xs:complexType>
    <xs:simpleContent>
      <xs:extension base="xs:integer">//Para el valor de la etqueta
        <xs:attribute name="country" type="xs:string" /> //Por el atributo
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
</xs:element>


- COntenido mixtp
<letter>
  Dear Mr. <name>John Smith</name>.
  Your order <orderid>1032</orderid>
  will be shipped on <shipdate>2001-07-13</shipdate>.
</letter>

<xs:element name="letter">
  <xs:complexType mixed="true">
    <xs:sequence>
      <xs:element name="name" type="xs:string"/>
      <xs:element name="orderid" type="xs:positiveInteger"/>
      <xs:element name="shipdate" type="xs:date"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>


INDICADORES
- ALL, los elementos pueden tener cualquier orden
<xs:element name="person">
  <xs:complexType>
    <xs:all>
      <xs:element name="firstname" type="xs:string"/>
      <xs:element name="lastname" type="xs:string"/>
    </xs:all>
  </xs:complexType>
</xs:element>

- choice, los elememros son opcionales
<xs:element name="person">
  <xs:complexType>
    <xs:choice>
      <xs:element name="employee" type="employee"/>
      <xs:element name="member" type="member"/>
    </xs:choice>
  </xs:complexType>
</xs:element>

- sequence Tienen que ir en el orden establecido
<xs:element name="person">
   <xs:complexType>
    <xs:sequence>
      <xs:element name="firstname" type="xs:string"/>
      <xs:element name="lastname" type="xs:string"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>

- sequence, maxOccurs minOccurs.       maxOccurs="unbounded" ilimitado
<xs:element name="person">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="full_name" type="xs:string"/>
      <xs:element name="child_name" type="xs:string" maxOccurs="10" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>

-






<xs:element name="pedido">
    <xs:complexType>
        <xs:sequence>
            <xs:element ref="datos_pedido" />
            <xs:element ref="datos_ordenante" />
            <xs:element ref="articulos" />
        </xs:sequence>
        <xs:attribute name="codigo" type="cod_pedido" use="required" />
        <xs:attribute name="tipo" type="tipo_pedido" use="required" />
    </xs:complexType>
</xs:element>