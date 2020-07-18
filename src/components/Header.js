import React from "react";

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Header() {
  return <StyledWrapper>
      <StyledTitle>Fruit Emporium</StyledTitle>
      <nav>
        <NavigationLink exact to="/" activeStyle={{borderBottom: '2px solid purple'}}>
          Home
        </NavigationLink>
        <NavigationLink to="/about" activeStyle={{borderBottom: '2px solid purple'}}>
          About
        </NavigationLink>
        <NavigationLink to="/sellers" activeStyle={{borderBottom: '2px solid purple'}}>
          Sellers
        </NavigationLink>
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

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  font-weight: bold;
  color: purple;
`

export default Header;
