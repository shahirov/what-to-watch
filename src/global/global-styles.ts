import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Arial", "Helvetica", sans-serif;
    font-size: 19px;
    line-height: 23px;
    color: #000000;
    background-color: #ffffff;
    margin: 0;
    min-width: 1000px;
    position: relative;
  }

  main {
    display: block; 
  }

  p {
    margin: 0;
  }
`
