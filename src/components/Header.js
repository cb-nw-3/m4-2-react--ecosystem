import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

function Header(props) {
  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 65px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
`;

const Nav = styled.nav`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: purple;

  &:hover {
    color: blueviolet;
  }
`;

export default Header;
