<?xml version="1.0" encoding="UTF-8"?>
<juegos>
  <juego codigo="C111" genero="accion" valoracion="9" modo="individual">
    <nombre>Assassin's Creed Valhalla</nombre>
    <autor>Ubisoft</autor>
    <empresa>Ubisoft</empresa>
    <descripción>Juego de acción y aventura ambientado en la era vikinga.</descripción>
    <plataformas>
      <plataforma>PlayStation</plataforma>
      <plataforma>Xbox One</plataforma>
    </plataformas>
  </juego>
  <juego  codigo="C222" valoracion="10" modo="individual">
    <nombre>The Witcher 3: Wild Hunt</nombre>
    <autor>CD Projekt</autor>
    <empresa>CD Projekt RED</empresa>
    <descripción>Juego de rol épico basado en la serie de libros de Andrzej Sapkowski.</descripción>
    <plataformas>
      <plataforma>PC</plataforma>
    </plataformas>
  </juego>
  <juego codigo="C333" genero="sandbox" valoracion="8" modo="multijugador">
    <nombre>Minecraft</nombre>
    <autor>Markus Persson</autor>
    <empresa>Mojang Studios</empresa>
    <plataformas>
      <plataforma>PC</plataforma>
      <plataforma>Android</plataforma>
    </plataformas>
  </juego>
</juegos>








<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Juegos para pc y un solo jugador</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Titulo</th>
      <th style="text-align:left">Puntuacion</th>
    </tr>
    <xsl:for-each select="juegos/juego">
    <tr>
      <td><xsl:value-of select="nombre"/></td>
      <td><xsl:value-of select="@valoracion"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>



