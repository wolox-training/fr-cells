import { LitElement, html } from "lit";
import styles from "./styles/book-list-styles.js";


export class BookList extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      repository: { tipe: Array },
      generalRepository: { tipe: Array },
      myArray: { tipe: Array },
    };
  }

  constructor() {
    super();
    this.repository = [];
    this.generalRepository = [];
    this.getDataJSON();
  }

  render() {
    return html` ${this.dataTemplate} `;
  }

  async getDataJSON() {
    const data = await fetch("../infoBook.json").then((response) =>
      response.json()
    );
    this.generalRepository = data;
  }

  _dataFormat() {
    let characters = [];
    for (let item in this.generalRepository) {
      for (let key in this.generalRepository[item]) {
        let element = this.generalRepository[item][key];
        characters.push({
          keyB: key,
          cover: element.cover,
          autor: element.autor,
          title: element.title,
        });
      }
    }
    this.repository = characters;
  }

  get dataTemplate() {
    this._dataFormat();
    return html`
      <div class="book-container">
        ${this.repository.map(
          (characters) => html`
            <a href="#" class="book-wrapper">
              <div>
                <img class="cover" src="${characters.cover}" alt="book cover" />
                <h1 class="title">${characters.title}</h1>
                <p class="author">${characters.autor}</p>
              </div>
            </a>
          `
        )}
      </div>
    `;
  }
}
customElements.define("book-list", BookList);
