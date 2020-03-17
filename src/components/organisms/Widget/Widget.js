import React from 'react';
import styled from 'styled-components';

import List from 'components/organisms/List/List';
import Header from 'components/atoms/Header/Header';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const AdjustedButtonIcon = styled(ButtonIcon)`
  margin-left: 8.5rem;
`;

const Widget = ({ list }) => (
  <>
    <Header>People</Header>
    <List list={list} />
    <AdjustedButtonIcon big />
  </>
);

export default Widget;
