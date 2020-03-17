import React from 'react';
import styled from 'styled-components';

import List from 'components/organisms/List/List';
import Header from 'components/atoms/Header/Header';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PopUp from 'components/molecules/PopUp/PopUp';

const AdjustedButtonIcon = styled(ButtonIcon)`
  margin-left: 8.5rem;
  margin-top: 2rem;
`;

class Widget extends React.Component {
  state = {
    isPopUpVisible: false,
    isListVisible: true,
  };

  handleButtonClick = () => {
    this.setState({ isPopUpVisible: true });
  };

  handlePopUpClose = () => {
    this.setState({ isPopUpVisible: false });
  };

  render() {
    const { list } = this.props;
    const { isPopUpVisible, isListVisible } = this.state;
    return (
      <>
        <Header>People</Header>
        {isListVisible ? <List list={list} /> : ''}
        <AdjustedButtonIcon big isRoot onClick={this.handleButtonClick} />
        {isPopUpVisible ? <PopUp closePopUp={this.handlePopUpClose} /> : ''}
      </>
    );
  }
}

export default Widget;
