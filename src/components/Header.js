import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header(props) {
  return (
    <Wrapper>
      <Title>FRUIT EMPORIUM</Title>
      <Nav>
        <MyLink to="/">Homepage</MyLink>
        <MyLink to="/about">About</MyLink>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MyLink = styled(Link)`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  text-decoration: none;
  color: black;
  margin-left: 30px;
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 50px;
`;
export default Header;
