import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
      <NavBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </NavBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 2em;
`;
const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledLink = styled(Link)`
  color: #5a2ce4;
  text-decoration: none;
  font-size: 1em;
  padding: 20px;
`;

export default Header;
