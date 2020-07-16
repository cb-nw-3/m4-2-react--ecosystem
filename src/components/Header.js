import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
      <Nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  min-width: 100%;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 130px;
`;

export default Header;
