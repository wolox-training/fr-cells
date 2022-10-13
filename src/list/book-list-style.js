import { css } from "lit-element";

export default css`
  :host {
    display: block;
    font-family: Roboto;
    margin: 0px;
    background-color: #f4f4f4;
  }

  .book-container {
    align-content: center;
    background-color: #f4f4f4;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    height: 100%;
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 100%;
    margin-bottom: 50px;
  }

  #imputSearch {
    box-sizing: border-box;
    height: 50px;
    width: 646px;
    border-radius: 5px;
    background-color: #fff;
    border: 2px solid #e8e8e8;
    max-width: 100%;
    padding: 10px;
    font-size: 20px;
  }

  .btn-search {
    height: 50px;
    width: 60px;
  }
`;
