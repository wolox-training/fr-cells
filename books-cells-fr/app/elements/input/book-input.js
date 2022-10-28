import { LitElement, html } from 'lit-element';
import styles from './book-input-style';

class BookInput  extends LitElement {

  static get styles() {
    return [styles]
      }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
        <div>
        <label class="form-label" for="input">Nombre</label>
        <input
        class="form-input"
          id="input"
          type="text"
          minlength="1"
          maxlength="12"
          name="name"
          required
        />
      </div> 
    `;
  }
}

customElements.define('book-input', BookInput);