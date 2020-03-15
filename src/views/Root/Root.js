import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'GlobalStyle/GlobalStyle';
import { variables } from 'GlobalStyle/variables';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const Root = () => (
  <div>
    <ThemeProvider theme={variables}>
      <GlobalStyle />
      <>
        <Button>People</Button>
        <Input placeholder="element" />
        <p>Text</p>
        <ButtonIcon big />
      </>
    </ThemeProvider>
  </div>
);

export default Root;
