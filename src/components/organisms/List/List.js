import React from 'react';
import styled from 'styled-components';

import ListItem from 'components/molecules/ListItem/ListItem';

const StyledWrapper = styled.ul`
  margin-left: 7rem;
`;

const List = ({ list }) => (
  <StyledWrapper>
    {list.map(({ name, expendable, subList }) => (
      <ListItem
        key={name}
        subList={subList}
        name={name}
        expendable={expendable}
      />
    ))}
  </StyledWrapper>
);

export default List;
