import { css } from "lit-element";

export default css`
  :host {
    background-color: #f4f4f4;
    display: block;
    font-family: Roboto;
    margin: 0px;
  }

  .card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.5);
    display: flex;
    height: 416px;
    padding: 24px;
    width: 900px;
  }

  .img-container {
    display: flex;
    margin-right: 52px;
    align-items: center;
    justify-content: center;
  }

  .book-cover {
    border-radius: 7px;
    height: 368px;
    width: 261px;
  }

  .content-container {
    display: flex;
    flex-direction: column;
  }

  .book-title-container {
    border: 1px;
    display: inline-block;

    text-align: justify;
  }

  .book-title {
    font-size: 32px;
    font-weight: 700;
  }

  .book-gender {
    color: #828282;
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;
  }

  .green-line {
    background-color: #bed23c;
    display: flex;
    flex-direction: row;
    height: 4px;
    width: 540px;
  }

  .detail-list {
    list-style: none;
    padding: 0;
  }

  .detail-item {
    margin-top: 36px;
  }

  .detail-title {
    color: #000;
    font-size: 20px;
    font-weight: bold;
    line-height: 24px;
  }

  .text {
    color: #828282;
    font-size: 20px;
    line-height: 24px;
  }
`;
