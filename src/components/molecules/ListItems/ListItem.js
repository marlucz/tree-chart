import React from 'react';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Element from 'components/atoms/Element/Element';

const ListItem = ({ name, expendable }) => (
  <>
    <Element expendable={expendable}>{name}</Element>
    <ButtonIcon minus />
  </>
);

export default ListItem;
