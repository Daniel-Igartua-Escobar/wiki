## Lanzar y escuchar eventos
```javaScript
this.dispatchEvent(new CustomEvent('nombre-del-evento', {
  bubbles: true,
  composed: true,
  detail: {} //Datos a enviar
}));
```

## Comunicar componentes
Lanzamos un evento por el out, le ponemos un nombre al canal y lo escuchamos en el in de otro componente. 
Le podemos asignar el in a una varibale o aún método.
```javaScript
  {
    zone: 'app__main', //app__main || app__transactional
    tag: 'nombre-del-componente',
    type: 'UI', //UI || DM
    properties: {
      propiedad1: '',
      className: 'not-border-bottom',
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          }
        },
        out: {
          card_installments_detail_reset_page: {
            bind: 'evento-1'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  },
```
