import React from 'react';

import ListProvider from 'context/ListContext';

import Widget from 'components/organisms/Widget/Widget';

const Teams = () => (
  <ListProvider>
    <Widget header="Teams" />
  </ListProvider>
);

export default Teams;
