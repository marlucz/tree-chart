import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:400,700');

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
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 1.2;
        overflow-x: hidden;
        background-color: #fff;
    }
`;

export default GlobalStyle;
