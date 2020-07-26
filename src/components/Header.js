import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <Title>
        <strong>Fruit Emporium</strong>
      </Title>
      <nav>
        <Link to="/">HOME</Link>
      </nav>
      <nav>
        <Link to="/about">ABOUT</Link>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 500;
`;

export default Header;
