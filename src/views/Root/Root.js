import React from 'react';

import { ThemeProvider } from 'styled-components';
import { variables } from 'GlobalStyle/variables';
import GlobalStyle from 'GlobalStyle/GlobalStyle';
import ListProvider from 'context/ListContext';

import Widget from 'components/organisms/Widget/Widget';

const Root = () => {
  return (
    <div>
      <ThemeProvider theme={variables}>
        <GlobalStyle />
        <ListProvider>
          <Widget />
        </ListProvider>
      </ThemeProvider>
    </div>
  );
};

export default Root;
