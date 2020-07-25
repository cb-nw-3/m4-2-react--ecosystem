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
  /* justify-content: space-around;
  align-content: center; */
  flex-wrap: wrap;
  justify-content: space-between;
  /* Other styles here */
`;

const Nav = styled.nav`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-around;
  align-items: center;
`;

const MyLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: black;
  margin-left: 30px;
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 50px;
  /* Other styles here */
`;
export default Header;
