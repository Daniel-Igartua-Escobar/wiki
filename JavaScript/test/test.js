const assert = require("chai").assert;

describe("Multiply", () => {
  it("fixed tests", () => {
    assert.strictEqual(multiply(1,1), 1);
    assert.strictEqual(multiply(2,1), 2);
    assert.strictEqual(multiply(2,2), 4);
    assert.strictEqual(multiply(3,5), 15);   
  });
});


suite('callPatchCardActivations( )', () => {
  test('should emit an "open-control-veil" event when callPatchCardActivations method is called', done => { 
    el.addEventListener('open-control-veil', () => {
      done();
    });
    el.callPatchCardActivations(true);
  });

  test('Should launch different events to manage the success of the call to the activations service', done => {
    el.addEventListener('close-control-veil', ev => expect(ev.detail).to.be.null);
    el.addEventListener('cells-bottom-modal-message-setup', ev => expect(ev.detail).to.deep.equal({message: 'card-overdraft-bottom-modal-message-activated-card'}));
    el.addEventListener('overdraft-card-success-response', ev => expect(ev.detail).to.be.true);
    el.addEventListener('open-bottom-modal-message', ev => expect(ev.detail).to.be.null);
    el.addEventListener('reset-card-product-detail', ev => expect(ev.detail).to.be.null);
    el._activationsSuccessful(activationsResponse().ACTIVATED);
    //lanzar evento de componente hijo para no llamar a métodos privados
    el.$.dm.dispatchEvent(new CustomEvent('patch-activations-succesful', activationsResponse().ACTIVATED ));
    done();
  });

  test('should call the patchCardActivations service', () => {
    sinon.spy(el.$.dm, 'patchCardActivations');
    el.card = getCard();
    el.callPatchCardActivations(true);
    expect(el._overdraftActivated).to.be.true;
    expect(el.$.dm.patchCardActivations).calledWith('0095', [ { activationId: 'OVERDRAFT_ACTIVATION', isActive: true} ]);
    //expect(el.$.dm.signTypeRequest).to.have.been.calledOnce;
    el.$.dm.patchCardActivations.restore();
  });
});


test("press 'Enter' should trigger the search", () => {
  var blurSpy = sinon.spy(myEl, 'blur');
  const e = new KeyboardEvent('keypress', { 'key': 'Enter' });
  myEl._onKeyPress(e);
  expect(blurSpy).to.have.been.called;
});