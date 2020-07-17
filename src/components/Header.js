import React from "react";
import styled from "styled-components";

function Header() {
  console.log("Header");

  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
      <nav>Navigation Here</nav>
      <Button>Hello</Button>
    </Wrapper>
  );
}

const Button = styled.button`
  background: blueviolet;
  border: none;
  padding: 16px 32px;
  color: white;
  font-size: 21px;
  border-radius: 2px;
`;

const Wrapper = styled.header`
  display: flex;
`;

const Title = styled.h1`
  font-size: 32px;
`;

export default Header;
