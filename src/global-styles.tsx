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

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(100%)
  }
`
