import React from 'react';
import styled from 'styled-components';

import MainListItem from 'components/molecules/ListItems/MainListItem';
import Header from 'components/atoms/Header/Header';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.ul`
  margin-left: 7rem;
`;

const AdjustedButtonIcon = styled(ButtonIcon)`
  margin-left: 8.5rem;
`;

const List = ({ list }) => (
  <>
    <Header>People</Header>
    <StyledWrapper>
      {list.map(el => (
        <MainListItem name={el.name} key={el.name} />
      ))}
    </StyledWrapper>
    <AdjustedButtonIcon big />
  </>
);

export default List;
