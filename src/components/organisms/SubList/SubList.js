import React from 'react';
import styled from 'styled-components';

import Item from 'components/molecules/Item/Item';
import SubListItem from 'components/molecules/SubListItem/SubListItem';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

const InnerWrapper = styled.div`
  margin-left: 4rem;
`;

const AdjustedButtonIcon = styled(ButtonIcon)`
  margin-left: 2rem;
  margin-top: 2rem;
`;

const SubList = ({ subList, name, expendable }) => (
  <>
    <StyledWrapper>
      <Item name={name} expendable={expendable} />
      <InnerWrapper>
        {subList.map(el => (
          <SubListItem name={el.name} key={el.name} />
        ))}
      </InnerWrapper>
      <AdjustedButtonIcon medium isRoot />
    </StyledWrapper>
  </>
);

export default SubList;
