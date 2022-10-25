import { LitElement, html } from "lit-element";
import styles from "./book-card-style";

class BookCard extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      book: { type: Object },
    };
  }

  constructor() {
    super();
    this.book = {
      cover: "",
      title: "",
      autor: "",
    };
  }

  render() {
    return html`
      <div class="book">
        <img src="${this.book.cover}" alt="${this.book.title}" />
        <h1>${this.book.title}</h1>
        <h2>${this.book.autor}</h2>
      </div>
    `;
  }
}

customElements.define("book-card", BookCard);
