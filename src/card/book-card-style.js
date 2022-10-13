import { css } from "lit-element";

export default css`
  .book {
    align-items: center;
    background: #fff;
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
