import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './header.css';

function Header() {
  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
      <Nav>
        <NavLink to='/' activeClassName='selected'>
          Home
        </NavLink>
        <NavLink to='/about' activeClassName='selected'>
          About
        </NavLink>
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
