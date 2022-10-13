import { LitElement, html } from "lit-element";
import styles from "./book-list-style.js";

class BookList extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      books: { type: Array },
      result: { type: Array },
    };
  }

  constructor() {
    super();
    this.books = [];
    this.placeholder = "Buscar por título del libro ...";
  }

  onclick(book) {
    let event = new CustomEvent("book-clicked", {
      detail: book.title,
    });
    this.dispatchEvent(event);
  }

  filterData() {
    const imput = this.shadowRoot.querySelector("#imputSearch").value.toLowerCase();
    const temporal = [];

    this.books.map((book) => {
      const title = book.title.toLowerCase();
      const autor = book.autor.toLowerCase();

      if (title.indexOf(imput) !== -1  || autor.indexOf(imput) !== -1) {
        temporal.push({cover: book.cover,title: book.title,autor: book.autor,});
      }
    });

    this.books = temporal;
  }

  render() {
    return html`
      <div class="search">
        <input
          @keyup=${this.filterData}
          type="text"
          id="imputSearch"
          placeholder="${this.placeholder}"
        />
      </div>
      <div class="book-container">
        ${this.books.map(
          (book) => html`
            <book-card
              @click=${() => this.onclick(book)}
              .book=${book}
            ></book-card>
          `
        )}
      </div>
    `;
  }
}

customElements.define("book-list", BookList);
