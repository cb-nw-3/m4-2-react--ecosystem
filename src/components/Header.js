import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
      <NavList>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
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

const NavItem = styled(Link)`
  text-decoration: none;
  padding: 0px 10px;
  color: purple;
  font-weight: 200;

  &:visited {
    color: hotpink;
  }
`;

export default Header;
