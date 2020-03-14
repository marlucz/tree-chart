import styled from 'styled-components';

const Button = styled.div`
  position: relative;
  max-width: 220px;
  padding: 18px 0;
  border-radius: 5px;
  background-image: linear-gradient(
    to bottom,
    #bb83fc 0%,
    #bb83fc 50%,
    #5f79f6 100%
  );
  background-position: 0 100%;
  background-size: 100% 200%;
  box-shadow: 0 13px 19px 0 rgba(144, 127, 249, 0.39);
  text-align: center;
  color: #fff;
  text-shadow: 0 2px 9px #8963e3;
  font-size: 1.4rem;
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
    box-shadow: 0 20px 30px rgba(195, 123, 255, 0.3);
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
