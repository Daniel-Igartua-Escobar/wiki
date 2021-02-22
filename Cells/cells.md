# Cells

## Comunicar componentes
- Creamos el evento dentro de un componente.
#### Lanzar evento en componente
```js
this.dispatchEvent(new CustomEvent('nombre-del-evento', {
  bubbles: true, //Permite que burbujee más arriba del elemento padre
  composed: true, //Permite que atraviese el shadow root
  detail: {} //Datos a enviar
}));
```  
#### Comunicar componentes en la página
- En la página, en el out del componente creamos un canal para ese evento.
- En otro componente en el cellsConnections in escuchamos ese canal asignandolo a un método o propiedad.
```js
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

## Params

## Estructura App Cells

- Comandos
    - cells create:App
    - cells create:component
- Dependencies
    - bower.json
- Config
    - App > config > ar | pe | mx uy
- Rutas
    - App > config > pe > base > _web-routes.js
    ```js
      'routes': {
        'nombre_pagina': 'ruta',
        'accountTransactionsSearcher': '/account/:productId/transactions-searcher'
      },
      'preRenderPages': {
        'accountTransactionsSearcher': [ 'accountTransactions' ]
      }
    ```

- Locales
    - App > locales-app
- Páginas
    - App > composerMocksTpl
- Componentes
    ftg- Todos los componentes de las dependencias

## Estructura de página

``` js
  'use strict';

  module.exports = CONFIG => {
    const PAGE_NAME = 'financeTransactionExecution';
    const utils = require('./common/_utils');
    const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
    const COUNTRY = utils.getCountry(CONFIG);
    const SPINNER = utils.SPINNER(CONFIG);
    const isNativeIos = CONFIG.nativeIos || false;
    const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
    const pageDmsOutCommonErrors = require('./common/_dm-common-errors');

    const PHONE_NUMBER = '01595000';

    const base = {
      hash: 'financeTransactionExecution',
      currentPage: {
        url: '/finance-transaction-execution/card/:productId/transaction/:transactionId',
        params: []
      },
      pages: pages,
      template: {
        tag: 'cells-template-coronita',
        properties: {
          drawerWidth: '100%',
          disableScrollLock: true,
          hasFooter: false,
          disableEdgeSwipe: true,
          headerFixed: true,
          animationType: 'verticalUp',
          extraHeaderClass: 'dark-blue-bg',
          className: isNativeIos ? 'ios-top-padding' : '',
          iOSFixedHeader: true,
          cellsConnections: {
            in: {
              finance_transaction_execution_scroll_zone: {
                bind: 'scrollItemIntoView'
              },
              finance_transaction_execution_init_page: {
                bind: 'recalculateHeader'
              },
              finance_transaction_execution_adjust_status_bar_on_amount_focus: {
                bind: 'recalculateStatusBarTop'
              },
              finance_transaction_execution_adjust_status_bar_on_amount_blur: {
                bind: 'resetStatusBarTop'
              }
            },
            out: {
              finance_transaction_execution_scroll_complete: {
                bind: 'set-scroll-bottom-event'
              },
              finance_transaction_execution_leave_scroll_complete: {
                bind: 'leave-scroll-bottom-event'
              }
            }
          }
        }
      },

      components: [
        SPINNER,
        {
          zone: 'app__main',
          tag: 'cells-handle-life-cycle',
          type: 'UI',
          properties: {
            pageName: 'financeTransactionExecution',
            customInitEvents: {
              'swipe-menu-enabled': false
            },
            cellsConnections: {
              in: {
                __bridge_app: {
                  bind: 'navigation'
                },
                __bridge_page_financeTransactionExecution: {
                  bind: 'init'
                }
              },
              out: {
                finance_transaction_execution_init_page: {
                  bind: 'init-page'
                },
                finance_transaction_execution_reset_page: {
                  bind: 'reset'
                },
                global_enable_menu_swipe: {
                  bind: 'swipe-menu-enabled',
                  'forward-to-native': true
                }
              }
            }
          }
        },
        {
          zone: 'app__header',
          type: 'UI',
          tag: 'cells-molecule-header',
          properties: {
            className: 'header--dark',
            rightIcon: 'coronita:close',
            titleName: 'glomo-finance-transaction-execution-header-title',
            cellsConnections: {
              in: {},
              out: {
                finance_transaction_execution_header_close: {
                  bind: 'click-right-button'
                }
              },
            }
          }
        }
      ]
    };

    base.components.push(
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-product-finance-transaction',
        properties: {
          cellsConnections: {
            in: {},
            out: {}
          }
        }
      }
    );
    pageDmsOutCommonErrors.addPageDmsOutCommonErrors(base.components);
    return base;
  };

```

## Ciclo de vida