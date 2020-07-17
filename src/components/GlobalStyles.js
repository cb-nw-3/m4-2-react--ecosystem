
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  p, h1, h3, a, h2 {
    font-family: 'Raleway', sans-serif;
  }

`;

export default GlobalStyles;