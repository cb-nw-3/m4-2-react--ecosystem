import React from "react";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
      <NavList>
        <NavItem to="/" exact={true} activeClassName="selected">
          Home
        </NavItem>
        <NavItem to="/about" activeClassName="selected">
          About
        </NavItem>
      </NavList>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin: 0 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 1000;
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 0px 10px;
  color: purple;
  font-weight: 1000;
  position: relative;

  &.selected {
    color: hotpink;
  }
  &.selected:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -5px;
    width: 60%;
    height: 2px;
    background-color: currentColor;
  }
`;

export default Header;
