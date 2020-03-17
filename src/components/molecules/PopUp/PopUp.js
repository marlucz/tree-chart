import React from 'react';
import styled from 'styled-components';

import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.gray};
  opacity: 0.8;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35rem;
  padding: 1.5rem 3rem;
  padding-right: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.4rem 1rem 0 ${({ theme }) => theme.primaryShadowLight};
  background-image: ${({ theme }) => theme.primaryGradient};
  background-repeat: no-repeat;
  background-size: 0.8rem 100%;
  background-color: #fff;
`;

const PopUp = ({ closePopUp }) => (
  <StyledWrapper onClick={closePopUp}>
    <InnerWrapper>
      <Input placeholder="Add element" />
      <ButtonIcon onClick={closePopUp} />
    </InnerWrapper>
  </StyledWrapper>
);

export default PopUp;
