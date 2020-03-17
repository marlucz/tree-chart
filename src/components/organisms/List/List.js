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
        name={name}
        expendable={expendable}
        subList={subList}
      />
    ))}
  </StyledWrapper>
);

export default List;
