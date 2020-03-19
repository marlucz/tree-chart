import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem 2rem;
  padding-left: 0;
  font-size: 1.4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const StyledCheckmark = styled.span`
  margin-right: 2rem;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  border: 0.2rem solid ${({ theme }) => theme.gray};

  &:hover {
    border-color: ${({ theme }) => theme.lightGreen};
  }
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ ${StyledCheckmark} {
    background: ${({ theme }) => theme.plusGradient};
    border: none;
  }
`;

const Checkmark = ({ changeFn }) => (
  <StyledLabel>
    <StyledInput type="checkbox" onChange={changeFn} />
    <StyledCheckmark />
    Expendable ?
  </StyledLabel>
);

Checkmark.propTypes = {
  changeFn: PropTypes.func.isRequired,
};

export default Checkmark;
