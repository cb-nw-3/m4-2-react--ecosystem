import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'arial', sans-serif;
    }
    body {
        margin: 0;
        padding: 10px 75px 100px;
    }
    h2 {
        margin: 0;
        padding: 0;
    }
    p {
        font-size: 1.2em;
        line-height: 1em;
        color: #333;
        padding-bottom: 1.2em;

        & strong {
            color: black;
        }

        & em {
            margin-top: 0;
            font-size: .8em;
            font-style: italic;
            color: #a0a0a0;
        }
    }
`;

export default GlobalStyles;
