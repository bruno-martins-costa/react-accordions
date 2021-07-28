import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    min-height: 100%;
    margin: 0;
    padding: 0;
    background-color: #fff;
  }

  * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  #root {
    padding: 64px 16px;
  }

  section {
    display: flex;
    flex-direction: column;
    max-width: 680px;
    margin: 0 auto 32px auto;
  }

  h2 {
    margin-bottom: 16px;
  }

  h3 {
    font-weight: normal;
    margin-top: 0;
    margin-bottom: 16px;
  }
`;
