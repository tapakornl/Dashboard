import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Noto Sans JP", sans-serif;
    font-size: 14px;
    font-weight: 400;
    @media only screen and (max-width: 992px) {
      height: calc(100% + 72px);
    }
  }

  button {
    font-family: "Noto Sans JP", sans-serif;
  }

  h1 {
    font-size: 32px;
    font-weight: 400;
  }
  h2 {
    font-size: 24px;
    font-weight: 400;
  }
  h3 { 
    font-size: 20px;
    font-weight: 400;
  }
  h6{
    font-size: 16px;
    font-weight: 400;
  }
  caption {
    font-size: 12px;
    font-weight: 500;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -ms-overflow-style:none;
    overflow: -moz-scrollbars-none;
    scrollbar-width: none;
  }
   
  ::-webkit-scrollbar{
    display:none;
  }

`;
