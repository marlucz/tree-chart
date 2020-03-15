import styled from 'styled-components';

const Input = styled.input`
  width: 220px;
  padding: 10px 0;
  padding-left: 2rem;
  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: 1.4rem;

  ::placeholder {
    text-transform: capitalize;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.black};
  }
`;

export default Input;
