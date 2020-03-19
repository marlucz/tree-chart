import React from 'react';
import styled from 'styled-components';
import Item from 'components/molecules/Item/Item';

const StyledWrapper = styled.li`
  position: relative;
  list-style-type: none;

  &:before {
    content: 'Or';
    position: absolute;
    left: -4rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.gray};
    font-weight: ${({ theme }) => theme.light};
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  border-radius: 0.5rem;
  margin: 2rem 2.5rem;
  margin-right: 0;

  &:before {
    content: '';
    position: absolute;
    bottom: 50%;
    left: -3rem;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-radius: 0 0 0 0px;
    width: 3rem;
    height: 100%;
  }

  &:after {
    position: absolute;
    content: '';
    bottom: -50%;
    left: -3rem;
    border-left: 1px solid #ccc;
    border-radius: 0px 0 0 0;
    width: 3rem;
    height: 100%;
  }
`;

const SubListItem = ({ name, parentName }) => (
  <StyledWrapper>
    <InnerWrapper>
      <Item subItem name={name} key={name} parentName={parentName} />
    </InnerWrapper>
  </StyledWrapper>
);

export default SubListItem;
