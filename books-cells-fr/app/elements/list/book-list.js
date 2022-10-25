import { LitElement, html } from "lit-element";
import styles from "./book-list-style.js";

class BookList extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      books: { type: Object },
    };
  }

  constructor() {
    super();
    this.books = [];
    this.placeholder = "Buscar por título o autor del libro ...";
  }

  onclick(book) {
    let event = new CustomEvent("book-clicked", {
      detail: book.title,
    });
    this.dispatchEvent(event);
  }

  filterData() {
    const imput = this.shadowRoot
      .querySelector("#imputSearch")
      .value.toLowerCase();

    this.books = this.books.filter((book) => {
      const title = book.title.toLowerCase();
      const autor = book.autor.toLowerCase();
      return title.indexOf(imput) !== -1 || autor.indexOf(imput) !== -1;
    });
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
        ${this.books.map((book) => html`<book-card @click=${() => this.onclick(book)} .book=${book}></book-card>`)}
      </div>
    `;
  }
}

customElements.define("book-list", BookList);
