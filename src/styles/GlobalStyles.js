import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  :root {
    --primary: #FF5722;
    --secondary: #4527A0;
    --white: #f2f2f2;
  }

  *, input, button {
    outline: none;
    border: none;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }
`;