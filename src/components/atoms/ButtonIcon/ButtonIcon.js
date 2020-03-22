import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  position: relative;
  min-width: 2.5rem;
  min-height: 2.5rem;
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
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    ${({ big }) =>
      big
        ? css`
            background-size: 45%;
          `
        : css`
            background-size: 80%;
          `}
    height: 100%;
    width: 100%;
    text-shadow: 0px 0.1rem 0.2rem ${({ theme }) => theme.plusShadowDark};
  }

  ${({ red }) =>
    red &&
    css`
      background: ${({ theme }) => theme.minusGradient};
      box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.minusShadowDark};
    `}

    ${({ medium }) =>
      medium &&
      css`
        width: 3rem;
        height: 3rem;
      `}

  ${({ big }) =>
    big &&
    css`
      width: 5rem;
      height: 5rem;
      box-shadow: 0 0.5rem 0.5rem ${({ theme }) => theme.plusShadowLight},
        0 0 0 0.8rem #fff, 0 0.9rem 2rem ${({ theme }) => theme.plusShadowDark};
    `}

  ${({ isRoot }) =>
    isRoot &&
    css`
      &:before {
        content: '';
        position: absolute;
        ${({ big }) =>
          big
            ? css`
                bottom: 110%;
              `
            : css`
                bottom: 100%;
              `}
        left: 50%;
        border-left: 1px solid #ccc;
        border-radius: 0 0 0 0px;
        width: 100%;
        height: 2rem;
      }
    `}
`;

export default ButtonIcon;
