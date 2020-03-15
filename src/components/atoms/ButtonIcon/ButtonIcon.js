import styled, { css } from 'styled-components';
import minusIcon from 'assets/icons/minus.svg';
import plusIcon from 'assets/icons/plus.svg';

const ButtonIcon = styled.button`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.plusGradient};
  box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.plusShadowDark};
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
    text-shadow: 0px 0.1rem 0.2rem ${({ theme }) => theme.plusShadowDark};
  }

  ${({ minus }) =>
    minus &&
    css`
      background: ${({ theme }) => theme.minusGradient};
      box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.minusShadowDark};
    `}

  ${({ big }) =>
    big &&
    css`
      width: 3rem;
      height: 3rem;
      box-shadow: 0 0.3rem 0.3rem ${({ theme }) => theme.plusShadowLight},
        0 0 0 0.5rem #fff,
        0 0.5rem 1.5rem ${({ theme }) => theme.plusShadowDark};
    `}

  ${({ isRoot }) =>
    isRoot &&
    css`
      &::before {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 0.1rem;
        height: 2rem;
        background-color: ${({ theme }) => theme.gray};
      }
    `}
`;

export default ButtonIcon;
