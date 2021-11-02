
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

## Stub
```js
  test('load data from stores ', ()=> {
    const _showStoreSalesModal = sinon.stub(el, 'showStoreSalesModal');
    el.storesProductsReceived(store);
    expect(el._loadedStores).to.be.true;
    expect(_showStoreSalesModal.calledOnce).to.be.true;
    _showStoreSalesModal.restore();
  });
```

## Comprobar que devuelve true o false
```js
      test('_showBarCardControl(), should not show the control bar when showSelectedPageTotal is less than maxNumberDots', () => {
        el.maxNumberDots = 8;
        expect(el._showBarCardControl(4)).to.be.false;
      });

      test('_showBarCardControl(), should show the control bar when showSelectedPageTotal is greater than maxNumberDots', () => {
        el.maxNumberDots = 8;
        expect(el._showBarCardControl(10)).to.be.true;
        //expect(el.arrayShowSelectedPageTotal).to.be.deep.equal([ {}, { class: 'dot-marked' }, {}, {} ]);
      });
```

## Spy, comprobar que se llama a un método con x argumentos o no
```js
      test('_calcPercentage(), should calculate the percentage and update the styles', () => {
        const spy_updateProgressBar = sinon.spy(el, '_updateProgressBar');
        el._calcPercentage(4, 8);
        expect(spy_updateProgressBar).calledWith(50);
        spy_updateProgressBar.restore();
      });

      test('_calcPercentage(), progressBarMaxValue = undefined', () => {
        const spy_updateProgressBar = sinon.spy(el, '_updateProgressBar');
        el._calcPercentage(4, undefined);
        expect(spy_updateProgressBar).not.to.have.been.called;
        //expect(spy_updateProgressBar).to.have.been.calledOnce;
        spy_updateProgressBar.restore();
      });
```

## Escuchar evento
```js

      el.addEventListener('close-control-veil', ev => expect(ev.detail).to.be.null);
      el.addEventListener('cells-bottom-modal-message-setup', ev => expect(ev.detail).to.deep.equal({message: 'card-overdraft-bottom-modal-message-activated-card'}));
      el.addEventListener('overdraft-card-success-response', ev => expect(ev.detail).to.be.true);
      el.addEventListener('open-bottom-modal-message', ev => expect(ev.detail).to.be.null);
      el.addEventListener('reset-card-product-detail', ev => expect(ev.detail).to.be.null);


      test('_openSeeAllModal() should launch the cells-gema-balances-operations-see-all-modal event', done => {
        el.addEventListener('cells-gema-balances-operations-see-all-modal', ev => {
          expect(ev.detail).to.be.null;
          done();
        });
        el._openSeeAllModal();
      });
```
