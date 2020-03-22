import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Element from 'components/atoms/Element/Element';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import teamsIcon from 'assets/icons/team.svg';
import tasksIcon from 'assets/icons/tasks.svg';

const StyledWrapper = styled.nav`
  margin-bottom: 3rem;
  display: flex;
`;

const StyledButtonLink = styled.li`
  display: flex;
  flex-direction: column;
`;

const StyledElement = styled(Element)`
  padding: 1.5rem 0 0 0;
  text-align: center;
`;

const Navbar = () => (
  <StyledWrapper>
    <StyledButtonLink>
      <ButtonIcon as={NavLink} to="/" big="true" icon={teamsIcon} />
      <StyledElement>Teams</StyledElement>
    </StyledButtonLink>
    <StyledButtonLink>
      <ButtonIcon as={NavLink} to="/tasks" big="true" icon={tasksIcon} />
      <StyledElement>Tasks</StyledElement>
    </StyledButtonLink>
  </StyledWrapper>
);

export default Navbar;
