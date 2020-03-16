import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'GlobalStyle/GlobalStyle';
import { variables } from 'GlobalStyle/variables';

import List from 'components/organisms/List/List';

class Root extends React.Component {
  state = {
    list: [
      { name: 'Element 1' },
      { name: 'Element 2' },
      { name: 'Element 3' },
      { name: 'Element 4' },
      { name: 'Element 5' },
    ],
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <ThemeProvider theme={variables}>
          <GlobalStyle />
          <List list={list} />
        </ThemeProvider>
      </div>
    );
  }
}

export default Root;
