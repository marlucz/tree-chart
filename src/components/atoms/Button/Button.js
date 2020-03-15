import styled from 'styled-components';

const Button = styled.div`
  position: relative;
  max-width: 220px;
  padding: 18px 0;
  border-radius: 5px;
  background-image: ${({ theme }) => theme.primaryGradient};
  background-position: 0 100%;
  background-size: 100% 200%;
  box-shadow: 0 13px 19px 0 ${({ theme }) => theme.primaryShadowLight};
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px 9px ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.bold};
  font-size: 1.6rem;
  letter-spacing: 0.6px;
  transition: background-position 0.7s;
  cursor: pointer;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: '';
    border-radius: 5px;
    box-shadow: 0 20px 30px ${({ theme }) => theme.primaryShadowDark};
    transition: opacity 0.7s;
    opacity: 0;
  }

  &:hover {
    background-position: 0 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export default Button;
