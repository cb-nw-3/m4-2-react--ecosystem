import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
  }

  h1, h2, h3, h4, h5, h6, p, ul, li {
        margin: 0;
        padding: 0;
    }

    p {
        font-size: 16px;
    }

  *{
    font-family:'Raleway', sans-serif;
    box-sizing:border-box;
  }
`;

export default GlobalStyle;
