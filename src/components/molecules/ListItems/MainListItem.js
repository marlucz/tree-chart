import React from 'react';
import styled, { css } from 'styled-components';
import ListItem from 'components/molecules/ListItems/ListItem';

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  padding-right: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.4rem 1rem 0 ${({ theme }) => theme.primaryShadowLight};
  background-image: ${({ theme }) => theme.primaryGradient};
  background-repeat: no-repeat;
  background-size: 0.8rem 100%;
  margin: 3rem 3rem;

  ${({ expendable }) =>
    expendable &&
    css`
      padding-right: 3.5rem;
    `};

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

const MainListItem = ({ name, expendable }) => (
  <StyledWrapper>
    <InnerWrapper>
      <ListItem name={name} expendable={expendable} />
    </InnerWrapper>
  </StyledWrapper>
);

export default MainListItem;
