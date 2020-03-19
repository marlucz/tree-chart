import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Item from 'components/molecules/Item/Item';
import SubList from 'components/organisms/SubList/SubList';

const StyledWrapper = styled.li`
  position: relative;
  list-style-type: none;

  &:before {
    content: 'And';
    position: absolute;
    left: -5rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.gray};
    font-weight: ${({ theme }) => theme.light};
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 35rem;
  position: relative;
  padding: 1.5rem 3rem;
  padding-right: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.4rem 1rem 0 ${({ theme }) => theme.primaryShadowLight};
  background-image: ${({ theme }) => theme.primaryGradient};
  background-repeat: no-repeat;
  background-size: 0.8rem 100%;
  margin: 3rem 3rem;

  &:before {
    content: '';
    position: absolute;
    bottom: 50%;
    left: -3rem;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-radius: 0 0 0 0px;
    width: 3rem;
    height: calc(50% + 3rem);
  }

  &:after {
    position: absolute;
    content: '';
    top: 50%;
    left: -3rem;
    border-left: 1px solid #ccc;
    border-radius: 0px 0 0 0;
    width: 3rem;
    height: calc(50% + 3rem);
  }
`;

const ListItem = ({ name, expendable, subList }) => {
  return (
    <StyledWrapper>
      {expendable ? (
        <InnerWrapper withChildren>
          <SubList name={name} expendable={expendable} subList={subList} />
        </InnerWrapper>
      ) : (
        <InnerWrapper>
          <Item name={name} />
        </InnerWrapper>
      )}
    </StyledWrapper>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  expendable: PropTypes.bool,
  subList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

Item.defaultProps = {
  expendable: false,
  subList: [],
};

export default ListItem;
