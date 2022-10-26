import { LitElement, html } from "lit-element";
import styles from "./book-detail-style.js";

class BookDetail extends LitElement {
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
      gender: "",
      autor: "",
      editorial: "",
      year: "",
    };
  }

  render() {
    return html`
      <div class="redirect">
        <a class="redirect-back" href="#">Atrás</a>
      </div>
      <div class="card">
        <div class="img-container">
          <img
            class="book-cover"
            src="${this.book.cover}"
            alt="${this.book.title}"
          />
        </div>
        <div class="content-container">
          <div class="book-title-container">
            <h1 class="book-title">${this.book.title}</h1>
            <p class="book-gender">(${this.book.gender})</p>
          </div>
          <div class="green-line"></div>
          <div class="book-details-container">
            <ul class="detail-list">
              <li class="detail-item">
                <span class="detail-title">Autor del libro:</span>
                <span class="text">${this.book.autor}</span>
              </li>
              <li class="detail-item">
                <span class="detail-title">Editorial:</span>
                <span class="text">${this.book.editorial}</span>
              </li>
              <li class="detail-item">
                <span class="detail-title">Año de publicación:</span>
                <span class="text">${this.book.year}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("book-detail", BookDetail);
