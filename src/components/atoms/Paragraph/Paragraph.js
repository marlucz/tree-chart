import styled from 'styled-components';

const Paragraph = styled.p`
  font-weight: ${({ theme }) => theme.bold};
  font-size: 1.4rem;
  text-transform: capitalize;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.black};
`;

export default Paragraph;
