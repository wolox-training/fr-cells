import { LitElement, html } from "lit";
import styles from "./styles/book-finder-styles";

export class BookFinder extends LitElement {
  static get styles() {
    return [styles];
  }

  render() {
    return html`
      <div class="finder-container">
        <input
          type="text"
          name="finder"
          id="inputSearch"
          placeholder="Busca por título del libro..."
        />
      </div>
    `;
  }
}
customElements.define("book-finder", BookFinder);
 