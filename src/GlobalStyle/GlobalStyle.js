import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
    }

    body {
        margin: 5rem;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.6rem;
        line-height: 1.2;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
