import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Item from 'components/molecules/Item/Item';
import SubListItem from 'components/molecules/SubListItem/SubListItem';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

import { ListContext } from 'context/ListContext';

const StyledWrapper = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
`;

const InnerWrapper = styled.div`
  margin-left: 4rem;
`;

const AdjustedButtonIcon = styled(ButtonIcon)`
  margin-left: 2rem;
  margin-top: 2rem;
`;

const SubList = ({ name, expendable, subList }) => {
  const { setMainElement, handlePopUpVisibility } = useContext(ListContext);

  const handleClick = () => {
    setMainElement(name);
    handlePopUpVisibility();
  };

  return (
    <>
      <StyledWrapper>
        <Item name={name} expendable={expendable} />
        <InnerWrapper>
          {subList.map(el => (
            <SubListItem name={el.name} key={el.name} parentName={name} />
          ))}
        </InnerWrapper>
        <AdjustedButtonIcon medium isRoot onClick={handleClick} />
      </StyledWrapper>
    </>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  expendable: PropTypes.bool.isRequired,
  subItem: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default SubList;
