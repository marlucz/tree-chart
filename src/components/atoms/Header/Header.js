import styled from 'styled-components';

const Header = styled.div`
  position: relative;
  width: 22rem;
  padding: 1.8rem 0;
  border-radius: 0.5rem;
  background-image: ${({ theme }) => theme.primaryGradient};
  background-position: 0 100%;
  background-size: 100% 200%;
  box-shadow: 0 1.3rem 1.9rem 0 ${({ theme }) => theme.primaryShadowLight};
  text-align: center;
  color: #fff;
  text-shadow: 0.2rem 0.2rem 0.9rem ${({ theme }) => theme.black};
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
    border-radius: 0.5rem;
    box-shadow: 0 2rem 3rem ${({ theme }) => theme.primaryShadowDark};
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

export default Header;
