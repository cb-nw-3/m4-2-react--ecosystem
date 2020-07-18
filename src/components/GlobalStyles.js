import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
}

h1 {
    font-size: 40px;
    font-weight: bold;
}

a {
    text-decoration: none;
}
`

export default GlobalStyle;