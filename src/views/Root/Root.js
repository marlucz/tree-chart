import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'GlobalStyle/GlobalStyle';
import { variables } from 'GlobalStyle/variables';
import MainListItem from 'components/molecules/ListItems/MainListItem';

const Root = () => (
  <div>
    <ThemeProvider theme={variables}>
      <GlobalStyle />
      <>
        <MainListItem />
      </>
    </ThemeProvider>
  </div>
);

export default Root;
