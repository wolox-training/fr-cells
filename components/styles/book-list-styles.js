import { css } from "lit";

export default css`
  :host {
    box-sizing: border-box;
    font-family: Roboto;
    margin: 0px;
  }

  .book-container {
    align-items: center;
    background-color: #fff;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .book-wrapper {
    align-items: center;
    background-color: #fff;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
    display: flex;
    height: 300px;
    justify-content: center;
    margin: 15px;
    max-width: 100%;
    width: 198px;
    flex-direction: column;
    text-decoration: none;
  }

  .book-wrapper:hover {
    transform: scale(1.15);
    transition: all 300ms;
  }

  .cover {
    height: 200px;
    max-width: 100%;
    width: 142px;
  }

  .title {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    margin: 5px 0px;
  }

  .author {
    color: #828282;
    font-size: 14px;
    margin: 0px;
  }
`;
