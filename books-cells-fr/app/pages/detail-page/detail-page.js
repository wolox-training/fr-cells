import { CellsPage } from "@cells/cells-page";
import { html, css } from "lit-element";
import "@cells-components/cells-template-paper-drawer-panel";
import styles from "./detail-page-styles";

class DetailPage extends CellsPage {
  static get is() {
    return "detail-page";
  }

  static get properties() {
    return {
      book: { type: Object },
    };
  }

  constructor() {
    super();
  }

  firstUpdated() {
    this.subscribe("book_picked_channel", (book) => {
      book;
      this.book = book;
    });
  }

  render() {
    return html` <cells-template-paper-drawer-panel mode="seamed">
      <div slot="app__main" class="container">
        <book-detail .book=${this.book}></book-detail>
      </div>
    </cells-template-paper-drawer-panel>`;
  }

  static get styles() {
    return [styles];
  }
}

window.customElements.define(DetailPage.is, DetailPage);
