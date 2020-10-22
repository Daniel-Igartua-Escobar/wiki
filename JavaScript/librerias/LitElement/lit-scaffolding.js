import { LitElement, html, css } from 'lit-element';


export class LitText extends LitElement {
  static get properties() {
    return {
    };
  }

  constructor() {
    super();
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`
    `;
  }
}

window.customElements.define('lit-text', LitText);