import { CellsPage } from "@cells/cells-page";
import { html, css } from "lit-element";
import "@cells-components/cells-template-paper-drawer-panel";
import data from "../../scripts/utils/data";

class DahsboardPage extends CellsPage {
  static get is() {
    return "dashboard-page";
  }

  static get properties() {
    return {
      book: {},
    };
  }

  constructor() {
    super();
  }

  render() {
    return html` <cells-template-paper-drawer-panel mode="seamed">
      <div slot="app__header"></div>
      
      <div slot="app__main" class="container">
        <book-list
          .books=${data.results}
        ></book-list>
      </div>
    </cells-template-paper-drawer-panel>`;
  }

  
}

window.customElements.define(DahsboardPage.is, DahsboardPage);
