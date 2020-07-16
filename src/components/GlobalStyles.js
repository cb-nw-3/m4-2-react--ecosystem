import React from 'react';
import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
     font-family: 'Lato', sans-serif;
     box-sizing: border-box; 
  }
`
export default GlobalStyles;