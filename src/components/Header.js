import React from "react";

import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
  return <StyledWrapper>
      <StyledTitle>Fruit Emporium</StyledTitle>
      <nav>
        <NavigationLink exact to="/">Home</NavigationLink>
        <NavigationLink to="/about">About</NavigationLink>
      </nav>
    </StyledWrapper>
}

const StyledWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const StyledTitle = styled.h1`
  font-size: 32px;
  margin-left: 20px;
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  font-weight: bold;
  color: purple;
`

export default Header;
