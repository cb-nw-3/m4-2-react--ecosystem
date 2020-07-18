import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header(props) {
  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  color: purple;
  font-size: 1em;
  font-weight: bold;

  & a {
    text-decoration: none;
    padding: 10px;
  }
`;

export default Header;
