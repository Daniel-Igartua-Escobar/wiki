import { LitElement } from 'lit-element';

export class UeNewsletterServices extends LitElement {

 /**
  * Get list of newsletter subscriptions
  * @param {Object} body 
  */
  getNewsletterList() {
    fetch('/registro/v1/newsletter/usuarios/{nil}/{site}', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res =>
        res.json().then(data => ({ status: res.status, body: data }))
    )
    .then(res => {
        this._dispatchEvent('login-success', res);
    })
    .catch(err => {
        this._dispatchEvent('login-error', err);
    })
    .finally(() => {
        this._dispatchEvent('login-finally');
    });
  }

 /**
  * Sign up for a new newsletter subscription
  * @param {Object} body 
  */
  putNewsletterSubscription(body) {
    fetch('', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(res => {
        this._dispatchEvent('newsletter-subscription-success', res);
    })
    .catch(err => {
        this._dispatchEvent('newsletter-subscription-error', err);
    })
    .finally(() => {
        this._dispatchEvent('newsletter-subscription-finally');
    });
  }

  /**
   * Dispatch event
   * @param {String} event
   * @param {*} detail
   */
  _dispatchEvent(event, detail) {
    this.dispatchEvent(new CustomEvent(event, { detail, bubbles: true, composed: true }));
  }

}

customElements.define('ue-newsletter-services', UeNewsletterServices);
