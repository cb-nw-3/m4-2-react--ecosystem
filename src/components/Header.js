import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    // <p>Hello</p>
    <Wrapper>
      <Title>Fruit Emporium</Title>
      <nav>
        <NavList>
          <li>
            <NavLink exact={true} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </NavList>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  padding-left: 50px;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  padding-right: 50px;
  
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 20px;
  font-size: 18px;
  color: #4C0CD4;

  &:hover {
    color: #FF0073;
  }
`;

export default Header;
