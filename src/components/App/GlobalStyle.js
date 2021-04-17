import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import-normalize;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --gray: #70707b;
    --main: #0080ff;
    --white: #fff;
    --black: #000;
    --dark: #10111d;
  }

  body {
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-family: 'Mulish', sans-serif;
    color: var(--dark);
  }
`;