import React from 'react';
import styled from 'styled-components';

import Input from 'components/atoms/Input/Input';
import Checkmark from 'components/atoms/Checkmark/Checkmark';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(183, 189, 202, 0.8);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
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
  <StyledWrapper>
    <Form onSubmit={closePopUp}>
      <Input type="text" name="element" placeholder="Add element" required />
      <Checkmark />
      <ButtonIcon />
    </Form>
  </StyledWrapper>
);

export default PopUp;
