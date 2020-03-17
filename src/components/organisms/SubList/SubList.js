import React from 'react';
import styled from 'styled-components';

import Item from 'components/molecules/Item/Item';
import ListItem from 'components/molecules/ListItem/ListItem';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

const InnerWrapper = styled.div`
  margin-left: 5rem;
`;

const AdjustedButtonIcon = styled(ButtonIcon)`
  margin-left: 7rem;
`;

const SubList = ({ subList, name, expendable }) => (
  <>
    <StyledWrapper>
      <Item name={name} expendable={expendable} />
      <InnerWrapper>
        {subList.map(el => (
          <Item subItem name={el.name} key={el.name} />
        ))}
      </InnerWrapper>
      <AdjustedButtonIcon medium />
    </StyledWrapper>
  </>
);

export default SubList;
