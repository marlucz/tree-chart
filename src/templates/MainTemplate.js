import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import { variables } from 'GlobalStyle/variables';
import GlobalStyle from 'GlobalStyle/GlobalStyle';

const MainTemplate = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={variables}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
