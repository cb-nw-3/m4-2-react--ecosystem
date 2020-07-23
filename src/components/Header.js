import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header(props) {
  return (
    <Wrapper>
      <Title>FRUIT EMPORIUM</Title>
      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/about">About</Link>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-around;
  /* Other styles here */
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 50px;
  /* Other styles here */
`;
export default Header;
