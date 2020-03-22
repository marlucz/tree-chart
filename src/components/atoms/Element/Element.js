import styled, { css } from 'styled-components';

const Element = styled.p`
  width: 100%;
  max-width: 25rem;
  padding: 1rem 0;
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
  font-size: 1.6rem;
  text-transform: capitalize;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.black};

  ${({ withBorder }) =>
    withBorder &&
    css`
      padding-left: 2rem;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 5px;
    `}

  ${({ subElement }) =>
    subElement &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
`;

export default Element;
