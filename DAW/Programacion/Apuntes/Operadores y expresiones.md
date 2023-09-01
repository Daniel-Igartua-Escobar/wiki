# Operadores y expresiones

```java
-
+
*
/
%
++
--

byte x = 2;
byte y = 0;
y = ++x //y vale 2 x vale 3
y = x++ //y vale 3 x vale 3

+=
-=
*=
/=
%=

?: // condición ? exp1 : exp2

==
!=
>
<
>=
<=

!   !op //Devuelve true si el operando es false y viceversa.
&   op1 & op2 //Devuelve true si op1 y op2 son true
|   op1 | op2 //Devuelve true si op1 u op2 son true
^   op1 ^ op2 //Devuelve true si sólo uno de los operandos es true
&&  op1 && op2 //Igual que &, pero si op1 es false ya no se evalúa op2
||  op1 || op2 //Igual que |, pero si op1 es true ya no se evalúa op2

// Operadores de bits
~   ~op //Realiza el complemento binario de op (invierte el valor de cada bit)
&   op1 & op2 //Realiza la operación AND binaria sobre op1 y op2
|   op1 | op2 //Realiza la operación OR binaria sobre op1 y op2
^   op1 ^ op2 //Realiza la operación OR-exclusivo (XOR) binaria sobre op1 y op2
<<  op1 << op2 //Desplaza op2 veces hacia la izquierda los bits de op1
>>  op1 >> op2 //Desplaza op2 veces hacia la derecha los bits de op1
>>> op1 >>> op2 //Desplaza op2 (en positivo) veces hacia la derecha los bits de op1
```