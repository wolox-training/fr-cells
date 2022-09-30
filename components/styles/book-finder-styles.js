import { css } from "lit";

export default css`
  :host {
    display: block;
    font-family: Roboto;
    margin: 0px;
  }

  .finder-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 100%;
    margin-bottom: 20px;
  }

  #inputSearch {
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
`;
