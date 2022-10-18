import { LitElement, html } from "lit-element";
import data from "./data.json" assert { type: "json" };
import "./card/book-card.js";
import "./detail/book-detail.js";
import "./list/book-list.js";

class AppComp extends LitElement {
  static get properties() {
    return {
      path: { attribute: false },
      book: { attribute: false },
    };
  }

  constructor() {
    super();
    this.path = window.location.pathname;
    this.book = {};
  }

  firstUpdated() {
    window.addEventListener("popstate", () => {
      this.path = window.location.pathname;
    });
    this.showDetail();
  }

  showDetail() {
    if (this.path !== "/") {
      this.book = this.getBookByName(this.path.replace("/", ""));
      if (!this.book) {
        window.location.pathname = "/";
      }
    }
  }

  bookClicked({ detail }) {
    this.book = this.getBookByName(detail);
    this.path = `/${detail}`;
    window.history.pushState({}, "", this.path);
  }

  getBookByName(name) {
    return data.results.find((bok) => bok.title === name);
  }

  render() {
    return html`
      ${this.path === "/"
        ? html`<book-list
            @book-clicked=${this.bookClicked}
            .books=${data.results}
          ></book-list>`
        : html`<book-detail .book=${this.book}></book-detail>`}
    `;
  }
}

customElements.define("book-app", AppComp);
