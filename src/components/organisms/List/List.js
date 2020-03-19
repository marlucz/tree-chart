import React, { useContext } from 'react';
import styled from 'styled-components';

import ListItem from 'components/molecules/ListItem/ListItem';

import { ListContext } from 'context/ListContext';

const StyledWrapper = styled.ul`
  margin-left: 7rem;
`;

const List = () => {
  const { list } = useContext(ListContext);

  return (
    <StyledWrapper>
      {list.map(element => (
        <ListItem key={element.name} {...element} />
      ))}
    </StyledWrapper>
  );
};

export default List;
