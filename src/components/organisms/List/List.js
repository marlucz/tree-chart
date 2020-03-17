import React from 'react';
import styled from 'styled-components';

import ListItem from 'components/molecules/ListItems/ListItem';
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
      {list.map(({ name, expendable, subList }) => (
        <ListItem
          key={name}
          name={name}
          expendable={expendable}
          subList={subList}
        />
      ))}
    </StyledWrapper>
    <AdjustedButtonIcon big />
  </>
);

export default List;
