import React, { useContext } from 'react';
import styled from 'styled-components';

import List from 'components/organisms/List/List';
import Header from 'components/atoms/Header/Header';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PopUp from 'components/molecules/PopUp/PopUp';

import { ListContext } from 'context/ListContext';

const AdjustedButtonIcon = styled(ButtonIcon)`
  margin-left: 8.5rem;
`;

const Widget = () => {
  const { list, popUpVisible, handlePopUpVisibility } = useContext(ListContext);

  return (
    <>
      <Header>People</Header>
      {list && <List />}
      <AdjustedButtonIcon big isRoot onClick={handlePopUpVisibility} />
      {popUpVisible && <PopUp />}
    </>
  );
};

export default Widget;
