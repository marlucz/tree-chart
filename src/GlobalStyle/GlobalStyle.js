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
        margin: 0;
        padding: 5rem;
        font-size: 1.6rem;
        font-family: 'Josefin Sans';
        font-weight: ${({ theme }) => theme.bold};
        color: ${({ theme }) => theme.black};
        line-height: 1.2;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
