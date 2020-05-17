import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Element from 'components/atoms/Element/Element';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import teamsIcon from 'assets/icons/team.svg';
import tasksIcon from 'assets/icons/tasks.svg';

const StyledWrapper = styled.nav`
  margin-bottom: 3rem;
`;

const StyledButtonLink = styled.li`
  flex-direction: column;
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledElement = styled(Element)`
  padding: 1.5rem 0 0 0;
  text-align: center;
`;

const Navbar = () => (
  <StyledWrapper>
    <StyledList>
      <StyledButtonLink>
        <ButtonIcon
          as={NavLink}
          to="/teams"
          big="true"
          icon={teamsIcon}
          activeclass="active"
        />
        <StyledElement>Teams</StyledElement>
      </StyledButtonLink>
      <StyledButtonLink>
        <ButtonIcon
          as={NavLink}
          to="/tasks"
          big="true"
          icon={tasksIcon}
          activeclass="active"
        />
        <StyledElement>Tasks</StyledElement>
      </StyledButtonLink>
    </StyledList>
  </StyledWrapper>
);

export default Navbar;
