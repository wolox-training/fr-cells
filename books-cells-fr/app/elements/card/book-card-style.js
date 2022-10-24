import { css } from "lit-element";

export default css`
  :host {
    background-color: #f4f4f4;
    display: block;
    font-family: Roboto;
    margin: 0px;
  }
  .book {
    align-items: center;
    background: #fff;
    border-radius: 5px;
    box-shadow: 4px 4px 10px $shadow;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: center;
    max-width: 100%;
    width: 198px;
  }

  .book:hover {
    transform: scale(1.15);
    transition: all 300ms;
  }

  .book img {
    border-radius: 7px;
    height: 200px;
    max-width: 100%;
    width: 142px;
  }

  h1 {
    color: #000;
    font-size: 16px;
    font-weight: 700;
  }

  h2 {
    color: #828282;
    font-size: 14px;
    margin: 0;
  }
`;
