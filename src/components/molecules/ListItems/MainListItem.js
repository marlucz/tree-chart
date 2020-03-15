import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.li`
  list-style-type: none;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 3rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.4rem 1rem 0 ${({ theme }) => theme.primaryShadowLight};
  background-image: ${({ theme }) => theme.primaryGradient};
  background-repeat: no-repeat;
  background-size: 0.8rem 100%;
  margin: 50px 0;

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

const MainListItem = () => (
  <StyledWrapper>
    <Paragraph>Element</Paragraph>
    <ButtonIcon minus />
  </StyledWrapper>
);

export default MainListItem;
