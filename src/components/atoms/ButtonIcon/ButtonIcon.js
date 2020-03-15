import styled, { css } from 'styled-components';
import minusIcon from 'assets/icons/minus.svg';
import plusIcon from 'assets/icons/plus.svg';

const ButtonIcon = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.plusGradient};
  box-shadow: 0 5px 10px ${({ theme }) => theme.plusShadowDark};
  border: none;
  cursor: pointer;

  &:after {
    display: block;
    content: '';
    background-image: url(${({ minus }) => (minus ? minusIcon : plusIcon)});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 80% 80%;
    height: 100%;
    width: 100%;
    text-shadow: 0px 1px 2px ${({ theme }) => theme.plusShadowDark};
  }

  ${({ minus }) =>
    minus &&
    css`
      background: ${({ theme }) => theme.minusGradient};
      box-shadow: 0 5px 10px ${({ theme }) => theme.minusShadowDark};
    `}

  ${({ big }) =>
    big &&
    css`
      width: 3rem;
      height: 3rem;
    `}
`;

export default ButtonIcon;
