import styled from 'styled-components';

const Input = styled.input`
  width: 220px;
  padding: 10px 0;
  padding-left: 2rem;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 5px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: ${({ theme }) => theme.bold};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.black};

  &::placeholder {
    font-family: 'Josefin Sans', sans-serif;
    text-transform: capitalize;
    letter-spacing: 0.2px;
    color: inherit;
  }
`;

export default Input;
