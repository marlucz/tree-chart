import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'GlobalStyle/GlobalStyle';
import { variables } from 'GlobalStyle/variables';
import Button from 'components/atoms/Button/Button';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={variables}>
      <>
        <Button>People</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
