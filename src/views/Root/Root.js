import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'GlobalStyle/GlobalStyle';
import { variables } from 'GlobalStyle/variables';

import Widget from 'components/organisms/Widget/Widget';

class Root extends React.Component {
  state = {
    list: [
      { name: 'Element 1', expendable: false },
      {
        name: 'Element 2',
        expendable: true,
        subList: [{ name: 'Sublisted Name 1' }, { name: 'Sublisted Name 2' }],
      },
      { name: 'Element 3', expendable: false },
      {
        name: 'Element 4',
        expendable: true,
        subList: [],
      },
      { name: 'Element 5', expendable: false },
    ],
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        <ThemeProvider theme={variables}>
          <GlobalStyle />
          <Widget list={list} />
        </ThemeProvider>
      </div>
    );
  }
}

export default Root;
