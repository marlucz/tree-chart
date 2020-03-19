import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Element from 'components/atoms/Element/Element';

import { ListContext } from 'context/ListContext';

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ expendable }) =>
    expendable &&
    css`
      padding-right: 1rem;
    `}

  ${({ subItem }) =>
    subItem &&
    css`
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 5px;
      padding-left: 2rem;
      padding-right: 1rem;
      margin: 2rem 0;
    `}
`;

const Item = ({ name, expendable, subItem, parentName }) => {
  const { handleRemoveMainItem, handleRemoveSubItem } = useContext(ListContext);

  const handleClick = () => {
    if (parentName) {
      handleRemoveSubItem(name, parentName);
    } else {
      handleRemoveMainItem(name);
    }
  };

  return (
    <StyledItem subItem={subItem} expendable={expendable}>
      <Element withBorder={expendable}>{name}</Element>
      <ButtonIcon minus onClick={handleClick} />
    </StyledItem>
  );
};

export default Item;
