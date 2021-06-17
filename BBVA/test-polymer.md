
## Esperar a que cargue dom y hacer click en elemento  
      
```js

      test('"balanceSummary" property should be an Object', done => {
        const spy = sinon.spy();
        el.addEventListener('cells-gema-stores-balances-summary-open-help-modal',spy);

        flush(() => {
          const icon = el.shadowRoot.querySelector('#balanceTitleIcon');
          icon.click();
          assert.ok(spy.calledOnce);
          done();
        });
      });
```
