import React from 'react';
import styled from 'styled-components';
import Item from 'components/molecules/Item/Item';
import SubList from 'components/organisms/SubList/SubList';

const StyledWrapper = styled.li`
  position: relative;
  list-style-type: none;

  &:before {
    content: 'And';
    position: absolute;
    left: -5rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.gray};
    font-weight: ${({ theme }) => theme.light};
  }
`;

const InnerWrapper = styled.div`
  max-width: 33rem;
  position: relative;
  padding: 1.5rem 3rem;
  padding-right: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.4rem 1rem 0 ${({ theme }) => theme.primaryShadowLight};
  background-image: ${({ theme }) => theme.primaryGradient};
  background-repeat: no-repeat;
  background-size: 0.8rem 100%;
  margin: 3rem 3rem;

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

const ListItem = ({ name, expendable, subList }) => (
  <StyledWrapper>
    {expendable ? (
      <InnerWrapper withChildren>
        <SubList subList={subList} name={name} expendable={expendable} />
      </InnerWrapper>
    ) : (
      <InnerWrapper>
        <Item name={name} expendable={expendable} />
      </InnerWrapper>
    )}
  </StyledWrapper>
);

export default ListItem;
